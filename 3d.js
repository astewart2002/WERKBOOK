let txt = "READ THIS WORKBOOK. SERIOUSLY. READ IT. I DARE YOU. Alessia Stewart. Interactive Media. 2024. Enjoy. Eneter if you dare. READ THIS WORKBOOK. SERIOUSLY.  ";

let bg = '#000000';
let fg = '#f1f1f1';

let font;

function preload() {
  font = loadFont('data/framd.ttf');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  imageMode(CENTER);
}

function draw() {
  background(0);
  perspective(PI/3.0, float(width/height), 1, 100000);

  let range = 2400;
  let eyeX = width/2.0 + map(mouseX, 0, width, -range, range);
  let eyeY = height/2.0  + map(mouseY, 0, height, -range, range);
  let eyeZ =(height/2.0) / tan(PI*30.0 / 180.0) + 400;
  let centerX = width/2.0;
  let centerY = height/2.0;
  let centerZ = 0;
  let upX = 0;
  let upY = 1;
  let upZ = 0;
  camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);
  fill(fg);
  push();
  textFont(font);
  textAlign(LEFT, CENTER);
  textSize(600);
  let w = textWidth(txt);
  let txtUp = txt.toUpperCase();
  
  // Calculate the position of the text
  let textPos = -frameCount * 35;
  
  // If the text has moved past the screen, reset frameCount to restart the loop
  if (textPos < -w) {
    frameCount = 0;
  }
  
  translate(textPos, 250, 0);
  let wave = map(sin(radians(frameCount)), -1, 1, -7, 7);
  text(txtUp, 0, 0);
  pop();
}
