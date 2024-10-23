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







let cats = [];
let catUVs = [];
let catNames = ['collarcat', 'fishcat', 'orangecat', 'siamesecat'];
let catPositions = [];
const minDistance = 50; // Minimum distance between cats
const fixedY = 0; // Fixed y-axis position for all cats
const fixedXPositions = [-200, -150, -100, -50, 0, 50, 100, 150, 200]; // Fixed x-axis positions

function preload() {
    for (let i = 0; i < catNames.length; i++) {
        cats[i] = loadModel(`assets/3d/${catNames[i]}.obj`, true);
        catUVs[i] = loadImage(`assets/3d/${catNames[i]}.png`);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noSmooth();
    smooth(); // Enable anti-aliasing
    frameRate(30);

    // Shuffle fixed x positions
    let availableXPositions = fixedXPositions.slice(); // Copy array to avoid mutation

    // Initialize positions for cats
    for (let i = 0; i < catNames.length; i++) {
        let xIndex = floor(random(availableXPositions.length)); // Random index
        let xPos = availableXPositions[xIndex]; // Select x position
        availableXPositions.splice(xIndex, 1); // Remove used position

        // Create a new position with fixed y and selected x
        let newPosition = createVector(xPos, fixedY, random(-200, 200));

        // Check for validity
        while (!isPositionValid(newPosition, i)) {
            // If invalid, get a new random z position
            newPosition.z = random(-200, 200);
        }
        catPositions[i] = newPosition;
    }
}

function isPositionValid(position, index) {
    for (let j = 0; j < index; j++) {
        let d = p5.Vector.dist(position, catPositions[j]);
        if (d < minDistance) {
            return false; // Position is too close to another cat
        }
    }
    return true; // Position is valid
}

function draw() {
    background(100);
    stroke(0);
    strokeWeight(0);
    orbitControl();
    rotateZ(PI);
    scale(1); // Adjusted scale for smaller models

    for (let i = 0; i < cats.length; i++) {
        push();
        translate(catPositions[i].x, catPositions[i].y, catPositions[i].z); // Use fixed positions
        texture(catUVs[i]); // Set the texture
        model(cats[i]); // Draw the model
        pop();
    }

    // Draw the look indicator
    drawLookIndicator();
}

function drawLookIndicator() {
    // Draw an arrow pointing in the direction of the camera's view
    push();
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, 0, 0, 0, -50); // Fixed arrow length
    pop();
}
