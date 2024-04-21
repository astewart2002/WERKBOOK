let squares = [];
let hoveredSquares = []; // Array to store hovered squares
let eraseButton; // Button to clear canvas

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an array of Square objects
  for (let x = 30; x < width; x += 20) {
    for (let y = 10; y < height; y += 20) {
      squares.push(new Square(x, y));
    }
  }

  // Create the erase button
  eraseButton = createButton('Press space bar to erase');
  eraseButton.position(10, 10);
  eraseButton.mousePressed(clearCanvas);
}

function draw() {
  background(225);
  

  // Clear the array of hovered squares
  hoveredSquares = [];

  // Check if mouse is over any square and change color
  for (let square of squares) {
    if (square.contains(mouseX, mouseY)) {
      hoveredSquares.push(square); // Add hovered square to array
    }
    square.display();
  }

  for (let i = 0; i < min(hoveredSquares.length, 20); i++) {
    hoveredSquares[i].color = color(255, 0, 0);
  }
}

function keyPressed() {
  // Check if space bar is pressed
  if (key === ' ') {
    clearCanvas();
  }
}

function clearCanvas() {
  // Clear the canvas
  for (let square of squares) {
    square.color = color(225);
  }
}

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(0);
  }

  contains(px, py) {
    // Check if the mouse is inside the square
    return px > this.x - 10 && px < this.x + 10 && py > this.y - 10 && py < this.y + 10;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, 20, 20);
  }
}

