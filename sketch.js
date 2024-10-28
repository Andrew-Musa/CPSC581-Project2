// let cat;
// let catUV;

// function preload() {
//     cat = loadModel('assets/3d/collarcat.obj');
//     catUV = loadImage('assets/3d/collarcat.png');
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight, WEBGL);
// }

// function draw() {
//     background(100)
//     // noFill();
//     stroke(0);
//     strokeWeight(0);
//     orbitControl()
//     rotateZ(PI)
//     scale(1000)
//     model(cat);
//     texture(catUV);

//     // Draw the look indicator
//     drawLookIndicator();
// }

// function drawLookIndicator() {
//     // Calculate direction vector based on camera orientation
//     let direction = createVector(0, 0, -1); // Forward direction
//     let right = createVector(1, 0, 0); // Right direction
//     let up = createVector(0, 1, 0); // Up direction

//     // Apply rotation based on camera orientation
//     let cameraRotation = createVector(0, 0, 0); // Placeholder for camera rotation
//     rotateY(cameraRotation.x);
//     rotateX(cameraRotation.y);
//     rotateZ(cameraRotation.z);

//     // Draw an arrow pointing in the direction of the camera's view
//     push();
//     stroke(255, 0, 0); // Red color for the indicator
//     strokeWeight(3);
//     line(0, 0, 0, direction.x * 50, direction.y * 50, direction.z * 50); // Draw the arrow line
//     pop();
// }





// let cats = [];
// let catUVs = [];
// let catNames = ['collarcat', 'fishcat', 'orangecat', 'siamesecat'];

// function preload() {
//     // Load models and textures
//     for (let i = 0; i < catNames.length; i++) {
//         cats[i] = loadModel(`assets/3d/${catNames[i]}.obj`);
//         catUVs[i] = loadImage(`assets/3d/${catNames[i]}.png`);
//     }
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight, WEBGL);

//     // Create random positions for multiple cats
//     for (let i = 0; i < cats.length; i++) {
//         cats[i].position = createVector(random(-200, 200), random(-200, 200), random(-200, 200));
//     }
// }

// function draw() {
//     background(100);
//     stroke(0);
//     strokeWeight(0);
//     orbitControl();
//     rotateZ(PI);
//     scale(1000);

//     // Draw each cat at its respective position
//     for (let i = 0; i < cats.length; i++) {
//         push(); // Save the current transformation state
//         translate(cats[i].position.x, cats[i].position.y, cats[i].position.z); // Move to the cat's position
//         texture(catUVs[i]); // Set the texture for the current cat
//         model(cats[i]); // Draw the current cat model
//         pop(); // Restore the previous transformation state
//     }
// }
















// let cats = [];
// let catUVs = [];
// let catNames = ['collarcat', 'fishcat', 'orangecat', 'siamesecat'];

// function preload() {
//     for (let i = 0; i < catNames.length; i++) {
//         cats[i] = loadModel(`assets/3d/${catNames[i]}.obj`, true);
//         catUVs[i] = loadImage(`assets/3d/${catNames[i]}.png`);
//     }
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight, WEBGL);
//     noSmooth();
//     frameRate(30);
// }

// function draw() {
//     background(100);
//     stroke(0);
//     strokeWeight(0);
//     orbitControl();
//     rotateZ(PI);
//     scale(100); // Adjusted scale to make sure models are visible

//     for (let i = 0; i < cats.length; i++) {
//         push();
//         let position = createVector(random(-200, 200), random(-200, 200), random(-200, 200));
//         translate(position.x, position.y, position.z); // Move to cat's position
//         texture(catUVs[i]); // Set the texture
//         model(cats[i]); // Draw the model
//         pop();
//     }

//     // Draw the look indicator
//     drawLookIndicator();
// }

// function drawLookIndicator() {
//     // Draw an arrow pointing in the direction of the camera's view
//     push();
//     stroke(255, 0, 0);
//     strokeWeight(3);
//     line(0, 0, 0, 0, 0, -50); // Fixed arrow length
//     pop();
// }







// let angleX = 0;
// let angleY = 0;
// const EYE_HEIGHT = 180;

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   // Disable right-click context menu for better interaction
//   document.addEventListener('contextmenu', event => event.preventDefault());
// }

// function draw() {
//   background(200);
  
//   // Calculate camera position
//   // Use angleY for horizontal rotation
//   let camX = cos(angleY) * 100;
//   let camZ = sin(angleY) * 100;
  
//   // Set up the camera with proper orientation
//   camera(
//     0, -EYE_HEIGHT, 0, // Camera position: centered but elevated
//     cos(angleY) * 100, -EYE_HEIGHT - sin(angleX) * 100, sin(angleY) * 100, // Look-at point
//     0, 1, 0 // Up vector
//   );
  
//   // Draw the ground
//   noStroke();
//   fill(0, 0, 255); // Blue color
//   rotateX(PI/2); // Rotate plane to be horizontal
//   plane(2000, 2000); // Large ground plane
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function mouseDragged() {
//   // Adjust rotation sensitivity
//   angleY -= (mouseX - pmouseX) * 0.01;
//   angleX = constrain(angleX + (mouseY - pmouseY) * 0.01, -PI/2, PI/2);
// }








let angleX = 0;
let angleY = 0;
const EYE_HEIGHT = 180;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Disable right-click context menu for better interaction
  document.addEventListener('contextmenu', event => event.preventDefault());
}

function draw() {
  background(200);
  
  // Calculate camera position
  let camX = cos(angleY) * 100;
  let camZ = sin(angleY) * 100;
  
  // Set up the camera with proper orientation
  camera(
    camX, -EYE_HEIGHT, camZ, // Camera position
    camX, -EYE_HEIGHT, camZ + 1, // Look-at point slightly forward
    0, 1, 0 // Up vector
  );
  
  // Draw the ground
  noStroke();
  fill(0, 0, 255); // Blue color
  rotateX(PI / 2); // Rotate plane to be horizontal
  plane(2000, 2000); // Large ground plane

  // Calculate position for the green cube
  let cubeX = cos(angleY) * 50; // Adjust distance in front of the user
  let cubeZ = sin(angleY) * 50; // Adjust distance in front of the user
  
  // Draw the small green cube
  push(); // Save current transformation state
  translate(cubeX, 10, cubeZ); // Move to the cube position slightly above the ground
  fill(0, 255, 0); // Green color
  box(20); // Draw a cube with size 20
  pop(); // Restore transformation state
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  // Adjust rotation sensitivity
  angleY -= (mouseX - pmouseX) * 0.01;
  angleX = constrain(angleX + (mouseY - pmouseY) * 0.01, -PI / 2, PI / 2);
}
