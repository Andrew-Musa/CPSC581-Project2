let cat;
let catUV;

function preload() {
    cat = loadModel('assets/3d/collarcat.obj');
    catUV = loadImage('assets/3d/collarcat.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(100)
    // noFill();
    stroke(0);
    strokeWeight(0);
    orbitControl()
    rotateZ(PI)
    scale(1000)
    model(cat);
    texture(catUV);
}