# Owen Weiss — Engineering portfolio

A minimal home page and interactive project collection, hosted on GitHub Pages.

## Local preview

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. No build step or package installation is required.

## Editing

- `projects.js`: project descriptions, images, captions, and optional links.
- `assets/images/`: optimized project images.
- `styles.css`: layout, colours, typography, and responsive rules.
- `app.js`: filters, project carousel, modal gallery, and hash navigation.

Projects can be linked directly using `#project/brightspot`, for example. The interface supports keyboard navigation, touch swipes, reduced motion, and narrow screens.

## Content sources

Content was adapted from Owen Weiss's September 2023 Engineering Portfolio, the March 2025 BrightSpot symposium poster, the 2025 Visual-Inertial Odometry report, and the Summer 2025 Voyis resume. The Cobionix experience description is intentionally blank pending an update. Image-level attribution is included in each project. Team work is identified as such. VIO camera imagery originates from the UZH-FPV dataset as used in the report. Original source documents and resumes are not included in this repository.

## Hosting

GitHub Pages serves the root of the `main` branch. `.nojekyll` keeps the files static. Live site: https://weiss-o.github.io/ using the `Weiss-O/Weiss-O.github.io` repository. GitHub Pages deploys updates pushed to `main`.
