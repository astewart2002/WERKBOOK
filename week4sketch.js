///This code was created by Alessia for interactive media

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225, 225, 0);
  frameRate(100);
}

function draw() {
  //background(225, 225, 0, 6);
  strokeWeight(2);
  fill(mouseX/4, mouseY/2, mouseX/2);
  //stroke(225, 0, 0);
  circle(mouseX, mouseY, 100);
  //line(mouseX, mouseY, pmouseX, pmouseY);
  
}

function mousePressed(){
  background(random(256), random(256), random(256));
}

// var lightblue, pink, lightgreen;
// lightblue="#ADD8E";
// pink="#FFB6C1;";
// lightgreen="#90EE90";
// colours[lightblue, pink, lightgreen];

