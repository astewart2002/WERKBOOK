// // CHANGING STROKE CIRCLE
// function setup(){
//   createCanvas(windowWidth,windowWidth);
// }


// // p5.js
// function draw(){
//   background(225);
//   noFill();
//   strokeWeight(mouseX/10);
//   stroke(0);
//   ellipse(windowWidth/2, windowHeight/2, 400, 400);
// }





// // MOUSE TO SQUARE CONDITION STATEMENT
// function setup(){
//   createCanvas(windowWidth,windowWidth);
// }

// function draw(){
//   background(225);
//   noFill();
//   strokeWeight(20);
//   stroke(0);
//   rectMode(CENTER);

//   if (mouseX < width/2){
//     ellipse(windowWidth/2, windowHeight/2, 400, 400);
//   } else {
//     rect(windowWidth/2, windowHeight/2, 400, 400);
//   }
  
// }




// // ROTATING OBJECTS
// function setup(){
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(225);
//   noStroke();
//   rectMode(CENTER);
//   rect(width/2,height/2,300,300);
//   fill(225);
//   push();
  
//   fill(225);
 
//   translate(windowWidth/2, windowHeight/2);
//   rotate(radians(frameCount));
//   fill(0);

//   rect(0, 0, 20, 400);
//   pop();
// }


// // // TWO ROTATING OBJECTS ON SEPERATE MATRIX
// function setup(){
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(0);
//   fill(255,0,0);
//   noStroke();
//   rectMode(CENTER);

//   push();
//   translate(windowWidth/2, windowHeight/2);
//   rotate(radians(frameCount));
//   rect(0, 0, 30, 700);
//   pop();

//   fill (255,0,0);

//   push();
//   translate(windowWidth/2, windowHeight/2);
//   rotate(radians(-frameCount));
//   rect(0, 0, 30, 700);
//   pop();

// }





// // RANDOM CIRCLE LOOP
// function setup () {
//   createCanvas(windowWidth,windowHeight);
//   frameRate(10);
// }

// function draw () {
//   background(128,128,128);
//   fill(225);
//   noStroke();

//   for (let i = 0; i < 10; i++) {
//     fill(random(255));
//     ellipse(random(width), random(height), i*10, i*10);
//   }

// }





// MOIRE PATTERN
// let fg=0;
// let bg='#f1f1f1';

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(bg);
//   stroke(fg);
//   noFill();
//   strokeWeight(17);
//   rectMode(CENTER);

//   for (let i = 0; i < constrain(frameCount, 1, 24); i++) {
//     ellipse(width/2, height/2, i*70, i*70);
//     ellipse(mouseX, mouseY, i*70, i*70);
//   }
// }





// FUN SPIRAL PATTERN

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(204,0,0);
//   noStroke();
//   fill(0);
//   rectMode(CORNER);

//   for (let i = 0; i < mouseX; i++) {
//     push();
//     translate(width/2, height/2);
//     rotate(radians(i*20.3+(i*frameCount*0.005)));
//     rect(mouseX*0.002*i, 0, 100, 10);
//     ellipse(mouseX*0.002*i+15, 35, 16, 16);
//     triangle(0,0,15,15,0, 30);
//     pop();
//   }

  // translate(mouseX, mouseY);
  // triangle(0, 0, 40, 40, 0, 60);
// }






// CIRCLE THAT MOVES OFF THE SCREEN
// function setup(){
//   createCanvas(windowWidth, windowHeight);
// }

// function draw(){
//   background(0);
//   fill(229,0,0);
//   noStroke();
//   let wave = tan(radians(frameCount));
//   ellipse(width/2 + wave * 200, height/2, 200, 200);
// }






// SPIRAL WAVE
// let amount = 100;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background('#f1f1f1');
//   fill(0);
//   noStroke();
//   translate(width/2, height/2);
//   for (let i = 0; i <= amount; i++) {
//     let y = map(i, 0, amount, -height*0.6, height*0.6);
//     let x = map(sin(radians((frameCount + (i*4)))), -1, 1, -width*0.4, width*0.4);
//     push();
//     translate(x, y);
//     ellipse(0, 0, 15, 15); 
//     pop();
//   }
// }




// EXPANDING CIRCLE

// let toggle = false;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   if (toggle == true) {
//     background(0);
//     fill(238,31,31);
//   } else {
//     background("#f1f1f1");
//     fill(0);
//   }

//   if (frameCount % 30 == 0) {
//     toggle = !toggle;
//   }

//   ellipse(width/2, height/2, frameCount, frameCount);
// }



// CIRCLE EXPANDING AS YOU GET CLOSER
// function setup(){
//   createCanvas(windowWidth,windowHeight);
// }

// function draw(){
//   background(0);
//   fill(229,0,0);
//   noStroke();
//   let circleSize = map(mouseX,0,width,50,600);
//   ellipse(width/2,height/2,circleSize,circleSize);
// }



let cubeSize = 100; // Initial size of the cube
let maxRotationSpeed = 0.005; // Maximum rotation speed
let rotationSpeedX, rotationSpeedY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  
  // Calculate the size of the cube based on the mouse position
  let maxSize = min(width, height) * 0.8; // Maximum size of the cube
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