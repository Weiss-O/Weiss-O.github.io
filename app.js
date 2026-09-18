(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS;
  const $ = (id) => document.getElementById(id);
  const asset = (name) => `assets/images/${name}.webp`;
  const pad = (n) => String(n).padStart(2, '0');
  let filtered = [...projects], active = 0, imageIndex = 0, detailProject = null;
  let returnFocus = null, openedFromRoute = false;
  const dialog = $('project-dialog');
  $('year').textContent = new Date().getFullYear();

  function buildDeck() {
    $('project-deck').replaceChildren(); $('project-index').replaceChildren();
    filtered.forEach((project, i) => {
      const card = document.createElement('button');
      card.type = 'button'; card.className = 'project-card'; card.dataset.id = project.id;
      card.innerHTML = `<span class="card-top"><span>PROJECT ${pad(projects.indexOf(project) + 1)}</span><span>${project.category.join(' / ')}</span></span><span class="card-picture"><img src="${asset(project.cover)}" alt="${project.coverAlt}" draggable="false">${project.id === "brightspot" ? '<img class="companion-image" src="assets/images/brightspot-projector.webp" alt="" draggable="false">' : ""}</span><span class="card-bottom"><span>${project.name}</span><span class="card-arrow" aria-hidden="true">↗</span></span>`;
      card.addEventListener('click', () => { if (i === active) openProject(project); else select(i); });
      $('project-deck').append(card);
      const index = document.createElement('button'); index.type = 'button'; index.className = 'index-button';
      index.innerHTML = `<span class="index-num">${pad(projects.indexOf(project) + 1)}</span><span>${project.short}</span>`;
      index.setAttribute('aria-label', `Select ${project.name}`);
      index.addEventListener('click', () => select(i)); $('project-index').append(index);
    });
    select(active);
  }
  function select(index) {
    active = (index + filtered.length) % filtered.length;
    const project = filtered[active];
    [...$('project-deck').children].forEach((card, i) => {
      let offset = i - active;
      if (offset > Math.floor(filtered.length / 2)) offset -= filtered.length;
      if (offset < -Math.floor(filtered.length / 2)) offset += filtered.length;
      card.style.setProperty('--offset', offset); card.style.setProperty('--abs', Math.abs(offset));
      card.dataset.away = String(Math.abs(offset) > 2);
      card.classList.toggle('active', i === active); card.tabIndex = Math.abs(offset) > 2 ? -1 : 0;
      card.setAttribute('aria-label', i === active ? `Open ${filtered[i].name}` : `Select ${filtered[i].name}`);
      card.setAttribute('aria-hidden', String(Math.abs(offset) > 2));
    });
    [...$('project-index').children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === active)));
    $('current-number').textContent = pad(active + 1); $('total-number').textContent = pad(filtered.length);
    $('active-context').textContent = project.context; $('active-title').textContent = project.name;
    $('active-description').textContent = project.teaser;
  }
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    filtered = projects.filter(p => button.dataset.filter === 'all' || p.category.includes(button.dataset.filter));
    active = 0; buildDeck();
  }));
  document.querySelector('.deck-prev').addEventListener('click', () => select(active - 1));
  document.querySelector('.deck-next').addEventListener('click', () => select(active + 1));
  $('open-project').addEventListener('click', () => openProject(filtered[active]));
  const stage = document.querySelector('.project-stage');
  stage.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); select(active + (event.key === 'ArrowRight' ? 1 : -1)); }
    if (event.key === 'Enter' && event.target === stage) { event.preventDefault(); openProject(filtered[active]); }
  });
  let startX = 0, startY = 0, swiped = false;
  stage.addEventListener('pointerdown', event => { startX = event.clientX; startY = event.clientY; swiped = false; });
  stage.addEventListener('pointerup', event => {
    const dx = event.clientX - startX, dy = event.clientY - startY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) { swiped = true; select(active + (dx < 0 ? 1 : -1)); }
  });
  stage.addEventListener('click', event => { if (swiped) { event.preventDefault(); event.stopPropagation(); swiped = false; } }, true);

  function populateDetails(project) {
    detailProject = project; imageIndex = 0;
    $('detail-number').textContent = `PROJECT ${pad(projects.indexOf(project) + 1)} / ${pad(projects.length)}`;
    $('detail-context').textContent = project.context; $('detail-title').textContent = project.name;
    $('detail-summary').textContent = project.summary; $('detail-credit').textContent = project.credit;
    $('detail-tags').replaceChildren(...project.tags.map(tag => { const span = document.createElement('span'); span.textContent = tag; return span; }));
    $('detail-sections').replaceChildren(...project.sections.map(([heading, body]) => {
      const section = document.createElement('section'); section.className = 'story-section';
      const h3 = document.createElement('h3'); h3.textContent = heading;
      const p = document.createElement('p'); p.textContent = body; section.append(h3, p); return section;
    }));
    $('detail-links').replaceChildren();
    if (project.link) { const link = document.createElement('a'); link.href = project.link[1]; link.textContent = project.link[0] + ' ↗'; link.target = '_blank'; link.rel = 'noopener noreferrer'; $('detail-links').append(link); }
    $('gallery-thumbnails').replaceChildren(...project.images.map(([file, caption, alt], i) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'thumbnail';
      button.setAttribute('aria-label', `Show image ${i + 1}: ${caption}`);
      const img = document.createElement('img'); img.src = asset(file); img.alt = ''; button.append(img);
      button.addEventListener('click', () => showImage(i)); return button;
    }));
    $('image-prev').hidden = $('image-next').hidden = project.images.length < 2;
    showImage(0); dialog.scrollTop = 0;
  }
  function showImage(index) {
    imageIndex = (index + detailProject.images.length) % detailProject.images.length;
    const [file, caption, alt] = detailProject.images[imageIndex];
    $('detail-image').src = asset(file); $('detail-image').alt = alt; $('image-caption').textContent = caption;
    $('full-image-link').href = asset(file); $('image-number').textContent = `${pad(imageIndex + 1)} / ${pad(detailProject.images.length)}`;
    [...$('gallery-thumbnails').children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === imageIndex)));
  }
  function openProject(project, fromRoute = false) {
    if (!dialog.open) { returnFocus = document.activeElement; openedFromRoute = fromRoute; }
    populateDetails(project);
    if (!dialog.open) { dialog.showModal(); document.body.classList.add('modal-open'); $('close-dialog').focus(); }
    if (!fromRoute) history.pushState(null, '', `#project/${project.id}`);
    document.title = `${project.name} — Owen Weiss`;
  }
  function closeProject(updateRoute = true) {
    if (!dialog.open) return;
    dialog.close(); document.body.classList.remove('modal-open');
    if (updateRoute) {
      if (openedFromRoute) history.replaceState(null, '', '#projects'); else history.back();
    }
    document.title = 'Projects — Owen Weiss';
    if (returnFocus && returnFocus.isConnected && returnFocus.offsetParent !== null) returnFocus.focus(); else $('open-project').focus();
  }
  $('close-dialog').addEventListener('click', () => closeProject());
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeProject(); } });
  $('image-prev').addEventListener('click', () => showImage(imageIndex - 1));
  $('image-next').addEventListener('click', () => showImage(imageIndex + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      const focusable = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')].filter(el => el.offsetParent !== null);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); showImage(imageIndex + (event.key === 'ArrowRight' ? 1 : -1)); } });
  function adjacentProject(direction) {
    const current = projects.indexOf(detailProject), project = projects[(current + direction + projects.length) % projects.length];
    populateDetails(project); history.replaceState(null, '', `#project/${project.id}`); document.title = `${project.name} — Owen Weiss`;
    const filteredIndex = filtered.indexOf(project); if (filteredIndex !== -1) select(filteredIndex);
  }
  $('detail-prev').addEventListener('click', () => adjacentProject(-1)); $('detail-next').addEventListener('click', () => adjacentProject(1));
  function route() {
    const hash = location.hash.slice(1), project = hash.startsWith('project/') ? projects.find(p => p.id === hash.slice(8)) : null;
    const showingProjects = hash === 'projects' || !!project;
    $('home-view').hidden = showingProjects; $('projects-view').hidden = !showingProjects;
    document.querySelectorAll('[data-nav]').forEach(a => { if (a.dataset.nav === (showingProjects ? 'projects' : 'home')) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (project) { const index = filtered.indexOf(project); if (index !== -1) select(index); openProject(project, true); }
    else { closeProject(false); document.title = showingProjects ? 'Projects — Owen Weiss' : 'Owen Weiss — Engineering & Projects'; }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  window.addEventListener('hashchange', route);
  document.querySelector('.skip-link').addEventListener('click', event => { event.preventDefault(); $('main').focus(); });
  buildDeck(); route();
})();
