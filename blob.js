

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  noStroke();
  rectMode(CENTER);
  frameRate(80);
  noiseDetail(2, 0.9);
}

function draw() {
  background(225);
  for (var x = 30; x < width; x += 10) {
    for (var y = 30; y < height; y += 10) {
      var distance = dist(x, y, mouseX - 0.5, mouseY - 0.5);
      var mappedDistance = map(distance, 0.15, width, 0.15, 1);
      var n = noise(x * 0.005, y * 0.005, frameCount * 0.08 * mappedDistance);
      push();
      translate(x, y);
      rotate(TWO_PI * n);
      scale(12 * n * mappedDistance);
 
      if (mouseIsPressed) {
        fill(255, 0, 0); // Change color to red if clicked
      } else {
        fill(0); // Otherwise, keep the color black
      }
      rect(4, 3, 2.5, 2.5);
      pop();
    }
  }
}
