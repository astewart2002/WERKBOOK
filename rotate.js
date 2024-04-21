function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(300);
  fill(255,0,0);
  noStroke();
  rectMode(CENTER);

  push();
  translate(windowWidth/2, windowHeight/2);
  rotate(radians(frameCount));
  rect(0, 0, 30, 700);
  pop();

  fill (255,0,0);

  push();
  translate(windowWidth/2, windowHeight/2);
  rotate(radians(-frameCount));
  rect(0, 0, 30, 700);
  pop();

}
