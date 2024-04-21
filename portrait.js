// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(300);
  
//   // Calculate the center of the canvas
//   let centerX = windowWidth / 2;
//   let centerY = windowHeight / 2;
  
//   // Head
//   fill(255, 215, 180);
//   ellipse(centerX, centerY, 200, 250);
  
//   // Eyes
//   fill(255);
//   ellipse(centerX - 40, centerY - 20, 40, 30);
//   ellipse(centerX + 40, centerY - 20, 40, 30);
  
//   // Pupils
//   fill(0);
//   let pupilDistance = 20;
//   let pupil1X = centerX - 40; 
//   let pupil1Y = centerY - 20; 
//   let pupil2X = centerX + 40; 
//   let pupil2Y = centerY - 20; 
//   ellipse(pupil1X, pupil1Y, pupilDistance, pupilDistance);
//   ellipse(pupil2X, pupil2Y, pupilDistance, pupilDistance);
  
//   // Nose
//   fill(255, 128, 128);
//   triangle(centerX, centerY + 10, centerX - 10, centerY + 40, centerX + 10, centerY + 40);
  
//   // Mouth
//   fill(255, 0, 0);
//   ellipse(centerX, centerY + 70, 60, 30);
// }



let headSize, eyePosY, eyesDistance, eyesWidth, eyesHeight, noseWidth, noseHeight, mouthWidth, mouthHeight, mouthStart, mouthEnd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

function draw() {
  generate();

  background(300);
  noFill();
  strokeWeight(15);
  stroke(0);

  translate(width / 2, height / 2);

  circle(0, 0, headSize);

  push();
  translate(0, eyePosY);

  fill(0);
  strokeWeight(15);
  ellipse(eyesDistance, 0, eyesWidth, eyesHeight);
  ellipse(-eyesDistance, 0, eyesWidth, eyesHeight);

  fill(0);
  ellipse(eyesDistance, 0, 20, 20);
  ellipse(-eyesDistance, 0, 20, 20);

  pop();

  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(0, 0, noseWidth, noseHeight);

  noFill();
  stroke(0);
  strokeWeight(30);
  arc(0, height * 0.2, mouthWidth, mouthHeight, radians(mouthStart), radians(mouthEnd));
}

function generate() {
  headSize = random(width * 0.4, width * 0.5);
  eyePosY = random(-height * 0.2, -height * 0.1);
  eyesDistance = random(width * 0.1, width * 0.2);
  eyesWidth = random(width * 0.1, width * 0.2);
  eyesHeight = random(width * 0.1, width * 0.2);
  noseWidth = random(width * 0.0, width * 0.2);
  noseHeight = random(width * 0.1, width * 0.2);
  mouthWidth = random(width * 0.1, width * 0.3);
  mouthHeight = random(width * 0.1, width * 0.2);
  mouthStart = random(0, 5);
  mouthEnd = random(160, 180);
}

