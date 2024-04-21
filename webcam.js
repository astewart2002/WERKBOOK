// // WEBCAM
let counter;
let accent;
let capture; // Declare capture variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO); // Create capture instance only once
  capture.size(640, 480); // Set the size of the capture
  background(255, 255, 255);
  counter = 0;
  textSize(20);
  capture.hide();
  accent = "225";
}

function draw() {
  // background(255, 255, 255, 100);
  image(capture, mouseX, mouseY, pmouseX, pmouseY);
  tint(236,0,0);
  filter(POSTERIZE,5); 
  noStroke();
  fill(accent);
  // circle(mouseX, mouseY, 16);

  console.log(windowWidth, windowHeight);

}

