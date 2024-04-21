let cubeSize = 100; // Initial size of the cube
let maxRotationSpeed = 0.005; // Maximum rotation speed
let rotationSpeedX, rotationSpeedY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(300);
  
  // Calculate the size of the cube based on the mouse position
  let maxSize = min(width, height) * 0.5; // Maximum size of the cube
  let targetSize = map(mouseX, 0, width, maxSize, 50); // Adjust the range as needed
  // Smoothly transition the cube size towards the target size
  cubeSize = lerp(cubeSize, targetSize, 0.05);
  
  // Calculate rotation speeds based on mouse position
  rotationSpeedX = map(mouseY, 0, height, -maxRotationSpeed, maxRotationSpeed);
  rotationSpeedY = map(mouseX, 0, width, -maxRotationSpeed, maxRotationSpeed);
  
  // Rotate the scene
  rotateX(frameCount * rotationSpeedX);
  rotateY(frameCount * rotationSpeedY);
  
  // Draw the cube
  drawCube(cubeSize);
}

function drawCube(size) {
  // Draw a cube with the specified size
  stroke(0);
  fill(225);
  noStroke();
  beginShape();
  // Front face
  fill(236,40,40);
  vertex(-size / 2, -size / 2, size / 2);
  vertex(size / 2, -size / 2, size / 2);
  vertex(size / 2, size / 2, size / 2);
  vertex(-size / 2, size / 2, size / 2);
  endShape(CLOSE);
  // Back face
  fill(212,43,43);
  beginShape();
  vertex(-size / 2, -size / 2, -size / 2);
  vertex(size / 2, -size / 2, -size / 2);
  vertex(size / 2, size / 2, -size / 2);
  vertex(-size / 2, size / 2, -size / 2);
  endShape(CLOSE);
  // Left face
  fill(149,10,10);
  beginShape();
  vertex(-size / 2, -size / 2, size / 2);
  vertex(-size / 2, -size / 2, -size / 2);
  vertex(-size / 2, size / 2, -size / 2);
  vertex(-size / 2, size / 2, size / 2);
  endShape(CLOSE);
  // Right face
  fill(252,26,26);
  beginShape();
  vertex(size / 2, -size / 2, size / 2);
  vertex(size / 2, -size / 2, -size / 2);
  vertex(size / 2, size / 2, -size / 2);
  vertex(size / 2, size / 2, size / 2);
  endShape(CLOSE);
  // Top face
  fill(232,14,14);
  beginShape();
  vertex(-size / 2, -size / 2, size / 2);
  vertex(size / 2, -size / 2, size / 2);
  vertex(size / 2, -size / 2, -size / 2);
  vertex(-size / 2, -size / 2, -size / 2);
  endShape(CLOSE);
  // Bottom face
  fill(83,2,2);
  beginShape();
  vertex(-size / 2, size / 2, size / 2);
  vertex(size / 2, size / 2, size / 2);
  vertex(size / 2, size / 2, -size / 2);
  vertex(-size / 2, size / 2, -size / 2);
  endShape(CLOSE);
}