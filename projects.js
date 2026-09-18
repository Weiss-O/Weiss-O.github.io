window.PORTFOLIO_PROJECTS = [
  {
    id: 'brightspot', name: 'BrightSpot', short: 'BrightSpot', context: '2024–2025 · Waterloo capstone · Team project', category: ['hardware', 'software'],
    teaser: 'Making everyday clutter visible with computer vision and a custom laser projector.',
    cover: 'brightspot-system', coverAlt: 'Exploded CAD rendering of the BrightSpot object highlighting device',
    summary: 'A camera and laser projector that point out clutter in a room, bringing gentle reminders into the physical environment.',
    tags: ['Computer vision', 'Raspberry Pi', 'Teensy', 'PCB design', 'Controls'],
    sections: [
      ['The idea', 'BrightSpot was developed by Matthew Ioannou, Aaron Spoelstra, and Owen Weiss as a fourth-year mechatronics design project. The goal was an automatic, phone-free way to help people notice clutter and build tidying habits.'],
      ['My contribution', 'I developed the object detection and spatial localisation algorithms using Python, OpenCV, and Meta’s SAM2 model. I also contributed to mechanical assembly and system testing, addressed thermal and cable-management issues, and added camera-based correction for position drift.'],
      ['The system', 'The team combined image differencing and segmentation with a Raspberry Pi, a Teensy controller, custom electronics, and a two-axis laser projector. A rotating mirror, position feedback, and custom sensing electronics control the projected beam.'],
      ['Tested, then refined', 'The symposium results report 20 Hz tracking at a 6° amplitude with 10% overshoot. Object detection averaged above 90% on still-camera images; image realignment retained 70% accuracy with up to 5° of position drift. Thermal testing led to a heat sink and disabling motor current between motions.']
    ],
    images: [
      ['brightspot-system', 'Exploded view of the integrated BrightSpot device.', 'Exploded CAD view showing the Raspberry Pi, circuit boards, enclosure and projector assembly'],
      ['brightspot-projector', 'Custom laser projector and position sensing mechanism.', 'BrightSpot rotating mirror projector and custom sensing circuit'],
      ['brightspot-board', 'Microcontroller shield for power, sensing, and actuator drivers.', 'Rendering of the circular BrightSpot microcontroller shield PCB'],
      ['brightspot-poster', 'Full team poster from the March 2025 engineering symposium.', 'BrightSpot capstone poster showing motivation, design, test results and conclusions']
    ],
    credit: 'Team results and images from the March 2025 BrightSpot symposium poster; individual contributions from the Summer 2025 resume.',
    link: ['Explore the project code', 'https://github.com/Weiss-O/capstone']
  },
  {
    id: 'visual-inertial-odometry', name: 'Visual–inertial odometry', short: 'Drone odometry', context: '2025 · University of Waterloo · Team project', category: ['software'],
    teaser: 'Estimating a drone’s motion from stereo images and inertial measurements.',
    cover: 'vio-trajectory', coverAlt: 'Plot comparing estimated drone trajectory with ground truth, alongside stereo camera images',
    summary: 'A GPS-independent state estimation pipeline, evaluated using recorded flights from the UZH-FPV Drone Racing Dataset.',
    tags: ['Python', 'OpenCV', 'Sensor fusion', 'Kalman filter', 'NumPy'],
    sections: [
      ['The approach', 'The team combined stereo visual odometry, a Madgwick orientation filter, and a Kalman filter for position and velocity. SIFT features, FLANN matching, RANSAC filtering, and triangulation turn image pairs into point clouds; alignment between frames estimates relative motion.'],
      ['Validation', 'The report compares the estimated trajectory and orientation with ground truth. Orientation RMSE was 0.024, 0.016, and 0.040 radians for roll, pitch, and yaw. Position RMSE on the validation dataset was 5.02, 3.17, and 4.30 metres for x, y, and z.'],
      ['What the tests revealed', 'Vision correction improved horizontal tracking, while vertical and yaw drift remained important limitations. The report proposes better motion models, further visual odometry tuning, and additional sensing as directions for improvement. This was dataset-based validation, not a claim of an autonomous flight deployment.']
    ],
    images: [
      ['vio-trajectory', 'Estimated and ground-truth trajectory on the testing dataset.', 'Drone trajectory plot and left and right stereo views from the testing dataset'],
      ['vio-validation', 'Validation trajectory showing the remaining vertical drift.', 'Validation trajectory comparing the estimate with ground truth'],
      ['vio-orientation', 'Madgwick filter orientation estimates against ground truth.', 'Roll, pitch and yaw estimates plotted against ground truth'],
      ['vio-matching', 'Point-cloud alignment between consecutive stereo frames.', 'Diagram showing weighted centroids and principal-axis alignment for relative motion estimation']
    ],
    credit: 'Co-authored with Sahil Kale, Dhruv Upadhayay, Akshat Doctor, and Aaron Spoelstra. Images and results from the 2025 VIO report; camera imagery uses the UZH-FPV dataset.'
  },
  {
    id: 'calibration-fixture', name: 'Automated calibration fixture', short: 'Calibration fixture', context: '2022 · Forcen Inc. · Sensing R&D', category: ['hardware', 'software'],
    teaser: 'Replacing manual weight loading with a complete force-sensor calibration system.',
    cover: 'calibration-system', coverAlt: 'CAD rendering of the complete automated force sensor calibration fixture',
    summary: 'I designed, assembled, programmed, and validated a fixture that automated the mechanical loading and data processing required to calibrate a force sensor.',
    tags: ['Mechanical design', 'GD&T', 'FEA', 'Arduino C++', 'Python'],
    sections: [
      ['From requirements to hardware', 'I compared system concepts around accuracy, integration, and cost. The chosen design used a linear drive, a spring mechanism, and a precision reference load cell. Pinned connections and linear bearings helped control alignment and off-axis loading.'],
      ['Closing the loop', 'An Arduino drove the motor under Python control. The software collected reference force and raw sensor readings, calculated calibration constants with linear regression, and uploaded the values to sensor firmware.'],
      ['Measured outcome', 'The fixture reduced calibration time by approximately 90%, from 10–15 minutes to 1 minute 20 seconds. The first revision achieved repeatable accuracy within 1.5% of full scale against a 1% target. I investigated remaining misalignment errors, tested their effects, and documented design changes for a future revision. Assembly instructions and design records supported continuity after my internship.']
    ],
    images: [
      ['calibration-system', 'Complete fixture: linear drive, spring system, reference sensor, and mounting hardware.', 'Full CAD assembly of the calibration fixture'],
      ['calibration-exploded', 'Exploded assembly view prepared for the work instructions.', 'Exploded CAD assembly of the calibration fixture spring and drive mechanism'],
      ['calibration-springs', 'The spring system increases motor travel for a given force increment.', 'Close-up CAD rendering of the spring mechanism and linear bearings']
    ],
    credit: 'Project description and CAD images from the September 2023 engineering portfolio, pages 3–5; timing results from the Summer 2025 resume.'
  },
  {
    id: 'motor-test-stand', name: 'Linear motor test stand', short: 'Motor test stand', context: '2022 · Waterloop · Motor test stand design co-op', category: ['hardware'],
    teaser: 'A configurable test bench for characterising linear induction motors.',
    cover: 'motor-test', coverAlt: 'Photograph of linear induction motor windings and the flywheel on the test stand',
    summary: 'A flywheel-based test bench designed to measure motor thrust across relative speeds and compare different linear induction motor designs.',
    tags: ['Mechanical design', 'DFMA', 'FMEA', 'Pneumatics', 'Instrumentation'],
    sections: [
      ['Design from first principles', 'I translated the propulsion team’s needs into formal requirements and validation tests. Equations relating flywheel size, torque, braking force, and cost led to a 20-inch flywheel. The remaining structure used available stock metal and aluminium extrusion.'],
      ['Built to adapt', 'Adjustable clamps accommodate different motor cores. Lead-screw mechanisms set the motor-to-flywheel air gap, while linear rails transfer motor thrust to load cells. I oversaw manufacturing and assembly apart from the flywheel.'],
      ['Sensing and control', 'The low-voltage circuit supports temperature, speed, and thrust measurements, together with braking and indicator control. A pneumatic arrangement vents and closes the brakes on loss of power. Building the stand exposed practical DFMA lessons and opportunities for future revisions.']
    ],
    images: [
      ['motor-test', 'Linear induction motor under test beside the flywheel.', 'Copper motor windings alongside the test stand flywheel'],
      ['motor-assembly', 'Mechanical fit check during prototype assembly.', 'Photograph of the motor mounting hardware during assembly'],
      ['motor-mount', 'Motor mounting subassembly designed for adjustable positioning.', 'CAD rendering of the linear induction motor mounting subassembly']
    ],
    credit: 'Project description, photographs, and CAD from the September 2023 engineering portfolio, pages 6–8.'
  },
  {
    id: 'spinesaver', name: 'SpineSaver', short: 'SpineSaver', context: '2021 · Hack the North · Team of three', category: ['hardware', 'software'],
    teaser: 'A wearable posture reminder prototyped in a 36-hour hackathon.',
    cover: 'spine-wearable', coverAlt: 'SpineSaver sensor clipped to the back of a shirt collar',
    summary: 'A small wearable and companion phone app that notify the user when their posture moves outside a calibrated range.',
    tags: ['Arduino', 'C++', 'MPU6050', 'Sensor integration', 'Prototyping'],
    sections: [
      ['The prototype', 'Built with a team of three during Hack the North 2021, the prototype combines a sensor clipped to the user’s collar with a belt-mounted Arduino. The app calibrates a comfortable posture and lets the user choose a tolerance.'],
      ['Making sensing useful', 'Motion can masquerade as a posture change in accelerometer data. I used acceleration magnitude near gravity to select steadier samples for orientation estimates, and added software hysteresis to prevent repeated notifications around the threshold.']
    ],
    images: [
      ['spine-wearable', 'Collar-mounted sensor on the working hackathon prototype.', 'Posture sensor clipped onto the back of a shirt'],
      ['spine-app', 'Calibration and tolerance controls in the companion app.', 'Phone showing the SpineSaver app calibration screen']
    ],
    credit: 'Photographs and project description from the September 2023 engineering portfolio, page 9.'
  },
  {
    id: 'image-steganography', name: 'Bitwise image steganography', short: 'Hidden images', context: 'Personal project · Python', category: ['software'],
    teaser: 'Hiding image data inside another image, one bit at a time.',
    cover: 'steganography', coverAlt: 'Decoy photograph of a laptop and tablet used in the image hiding experiment',
    summary: 'An exploration of least-significant-bit image hiding, Boolean logic, and the low-level operations that also appear in embedded programming.',
    tags: ['Python', 'Pillow', 'Bit manipulation', 'Boolean logic'],
    sections: [
      ['How it works', 'The program replaces the least significant bits of a decoy image with significant bits from a hidden image. Recovering those bits reconstructs the concealed data while the carrier image looks largely unchanged.'],
      ['Going further', 'I explored Boolean expressions across several carrier bits to hide multiple images. The project was a practical introduction to bit masks, bitwise operations, and digital logic. It demonstrates steganography; it is not a cryptographic security claim.']
    ],
    images: [
      ['steganography', 'Original decoy image used to carry hidden pixel data.', 'Original photograph of a laptop and tablet'],
      ['steganography-result', 'Encoded carrier image: its visible appearance is largely preserved.', 'The same photograph after hidden data has been encoded into low-order bits']
    ],
    credit: 'Images and project description from the September 2023 engineering portfolio, page 10, originally titled “Bitwise Image Encryption.”'
  },
  {
    id: 'maze-solver', name: 'Image-based maze solver', short: 'Maze solver', context: 'Personal project · Python', category: ['software'],
    teaser: 'Turning a maze image into a graph, then tracing a route through it.',
    cover: 'maze', coverAlt: 'Large square maze with the solution route traced in red',
    summary: 'An early Python challenge: accept an image of a maze, build a navigable representation, and draw its solution.',
    tags: ['Python', 'Data structures', 'Image processing', 'Graph traversal'],
    sections: [
      ['Pixels into a graph', 'The program reads maze pixels into an array, then represents intersections as nodes with up, down, left, and right connections. This makes the geometry of the image usable as a graph.'],
      ['Finding a route', 'A traversal strategy inspired by always turning left advances through the maze. At a dead end, the solver returns to the last intersection with untried options. The result is rendered back onto the original maze image.']
    ],
    images: [['maze', 'A solution generated for a large maze input. Open the image to inspect the route.', 'Dense square maze with a red solution path from the top to the bottom']],
    credit: 'Output image and project description from the September 2023 engineering portfolio, page 11.'
  }
];
