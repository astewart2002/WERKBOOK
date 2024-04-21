
// // CUSTOM FONT LAYOUT
// let hello

// function preload(){
//   hello = loadFont('data/aktura.otf');
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(255); 
//   fill(236,0,0); 
//   textFont(hello);
//   textSize(300); 
//   textAlign(CENTER, CENTER);
//   text("computer", width/2, height/2-30);
// }

// let txt = "READ THIS WORKBOOK. SERIOUSLY. READ IT. I DARE YOU. Alessia Stewart. Interactive Media. 2024. Enjoy. Eneter if you dare. READ THIS WORKBOOK. SERIOUSLY. READ IT. I DARE YOU. Alessia Stewart. Interactive Media. 2024. Enjoy. Eneter if you dare. READ THIS WORKBOOK. SERIOUSLY. READ IT. I DARE YOU. Alessia Stewart. Interactive Media. 2024. Enjoy. Eneter if you dare. READ THIS WORKBOOK. SERIOUSLY. READ IT. I DARE YOU. Alessia Stewart. Interactive Media. 2024. Enjoy. Eneter if you dare. ";

// let bg = '#000000';
// let fg = '#f1f1f1';

// let font;

// function preload() {
//   font = loadFont('data/hello.ttf');

// }

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   imageMode(CENTER);
// }

// function draw() {
//   background(0);
//   perspective(PI/3.0, float(width/height), 1, 100000);

//   let range = 2400;
//   let eyeX = width/2.0 + map(mouseX, 0, width, -range, range);
//   let eyeY = height/2.0  + map(mouseY, 0, height, -range, range);
//   let eyeZ =(height/2.0) / tan(PI*30.0 / 180.0) + 400;
//   let centerX = width/2.0;
//   let centerY = height/2.0;
//   let centerZ = 0;
//   let upX = 0;
//   let upY = 1;
//   let upZ = 0;
//   camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);
//   fill(fg);
//   push();
//   textFont(font);
//   textAlign(LEFT, CENTER);
//   textSize(600);
//   let w = textWidth(txt);
//   let txtUp = txt.toUpperCase();
//   translate(-frameCount * 20, 250, 0);
//   let wave = map(sin(radians(frameCount)), -1, 1, -7, 7);
//   text(txtUp, 0, 0);
//   pop();
// }






// 3D TEXT EFFECT
// let txt = "READ THIS WORKBOOK. SERIOUSLY. READ IT. I DARE YOU. Alessia Stewart. Interactive Media. 2024. Enjoy. Eneter if you dare. READ THIS WORKBOOK. SERIOUSLY.  ";

// let bg = '#000000';
// let fg = '#f1f1f1';

// let font;

// function preload() {
//   font = loadFont('data/framd.ttf');

// }

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   imageMode(CENTER);
// }

// function draw() {
//   background(0);
//   perspective(PI/3.0, float(width/height), 1, 100000);

//   let range = 2400;
//   let eyeX = width/2.0 + map(mouseX, 0, width, -range, range);
//   let eyeY = height/2.0  + map(mouseY, 0, height, -range, range);
//   let eyeZ =(height/2.0) / tan(PI*30.0 / 180.0) + 400;
//   let centerX = width/2.0;
//   let centerY = height/2.0;
//   let centerZ = 0;
//   let upX = 0;
//   let upY = 1;
//   let upZ = 0;
//   camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);
//   fill(fg);
//   push();
//   textFont(font);
//   textAlign(LEFT, CENTER);
//   textSize(600);
//   let w = textWidth(txt);
//   let txtUp = txt.toUpperCase();
  
//   // Calculate the position of the text
//   let textPos = -frameCount * 35;
  
//   // If the text has moved past the screen, reset frameCount to restart the loop
//   if (textPos < -w) {
//     frameCount = 0;
//   }
  
//   translate(textPos, 250, 0);
//   let wave = map(sin(radians(frameCount)), -1, 1, -7, 7);
//   text(txtUp, 0, 0);
//   pop();
// }


// let font;

// let bg = '#000000';
// let fg = '#f1f1f1';

// let txt = "TYPEMACHINES";

// function preload() {
//   mono = loadFont('data/gambarino.otf'); 
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textFont(mono);
//   textAlign(LEFT, CENTER);
// }

// function draw() {
//   background(bg);
//   fill(fg);
//   textSize(50 - (frameCount/7));
//   let amount = frameCount;

//   let step = 360.0 / amount;

//   push();

//   translate(width/2, height/2);

//   for (let i = 0; i < amount; i++) {
//     let rotation = step*i;
//     push();
//     rotate(radians(rotation + frameCount));
//     text(txt, 10, 0);
//     pop();
//   }

//   pop();

// }


// INTERACTIVE MEDIA TEXT SHAPE

// let mono;

// let bg = '#000000';
// let fg = '#f1f1f1';

// let txt = "interactive media";

// function preload() {
//   mono = loadFont('data/gambarino.otf');
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textFont(mono);
//   textAlign(CENTER, CENTER);
// }

// function draw() {
//   background(bg);
//   fill(fg);
  
//   // Calculate text size based on a sine wave for smooth expansion and shrinkage
//   let size = map(sin(frameCount * 0.05), -1, 1, 30, 80); // Adjust frequency and amplitude for different effects
  
//   textSize(size);
  
//   let amount = 12; // Number of text instances
  
//   let step = TWO_PI / amount;

//   push();

//   translate(width / 2, height / 2);

//   for (let i = 0; i < amount; i++) {
//     let rotation = step * i;
//     let scaleAmount = map(sin(frameCount * 0.05), -1, 1, 0.5, 1.5); // Adjust frequency and amplitude for different effects
//     let x = cos(rotation) * 100 * scaleAmount;
//     let y = sin(rotation) * 100 * scaleAmount;
//     push();
//     translate(x, y);
//     rotate(rotation + frameCount * 0.02); // Adjust rotation speed
//     text(txt, 0, 0);
//     pop();
//   }

//   pop();
// }





// jnefjkfwnekl
// let radius = 50; // Initial radius of the organic shape
// let growthSpeed = 1; // Speed of growth
// let maxRadius = 200; // Maximum radius of the organic shape

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
  
//   // Calculate the current radius based on a sine wave for smooth expansion and shrinkage
//   let currentRadius = radius + sin(frameCount * 0.05) * 50; // Adjust frequency and amplitude for different effects
  
//   // Draw the organic shape
//   drawOrganicShape(width / 2, height / 2, currentRadius);
  
//   // Update the radius for the next frame
//   radius += growthSpeed;
  
//   // If the radius reaches the maximum or minimum, reverse the growth direction
//   if (radius >= maxRadius || radius <= 0) {
//     growthSpeed *= -1;
//   }
// }

// function drawOrganicShape(x, y, radius) {
//   // Draw an organic shape using bezier vertices
//   beginShape();
//   for (let angle = 0; angle < TWO_PI; angle += 0.1) {
//     let offsetX = cos(angle) * radius * random(0.8, 1.2);
//     let offsetY = sin(angle) * radius * random(0.8, 1.2);
//     let noiseFactor = noise(offsetX * 0.01, offsetY * 0.01, frameCount * 0.01) * 20;
//     let newX = x + offsetX + noiseFactor;
//     let newY = y + offsetY + noiseFactor;
//     vertex(newX, newY);
//   }
//   endShape(CLOSE);
// }




// RANDOM BLOBs
let blobs = [];
let numBlobs = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numBlobs; i++) {
    blobs.push(createBlob());
  }
}

function draw() {
  background(300);
  for (let i = 0; i < blobs.length; i++) {
    blobs[i].display();
    blobs[i].move();
    for (let j = 0; j < blobs.length; j++) {
      if (i !== j && dist(blobs[i].x, blobs[i].y, blobs[j].x, blobs[j].y) < 150) {
        blobs[i].connect(blobs[j]);
      }
    }
  }
}

function createBlob() {
  let blob = {
    x: random(width),
    y: random(height),
    radius: random(25, 80),
    speedX: random(2, 1),
    speedY: random(4, 1),
    display: function() {
      noStroke();
      fill(256,36,36,210);
      ellipse(this.x, this.y, this.radius * 2);
    },
    move: function() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > width) {
        this.speedX *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.speedY *= -1;
      }
    },
    connect: function(otherBlob) {
      stroke(255, 150);
      strokeWeight(2,0);
      line(this.x, this.y, otherBlob.x, otherBlob.y);
    }
  };
  return blob;
}



// DICE

// let angle = 0;
// let cubeSize = 100; // Initial size of the cube
// let growthSpeed = 1; // Speed of growth
// let maxCubeSize = 200; // Maximum size of the cube

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
// }

// function draw() {
//   background(0);
  
//   // Calculate the current size of the cube based on a sine wave for smooth expansion and shrinkage
//   let currentSize = cubeSize + sin(frameCount * 0.05) * 50; // Adjust frequency and amplitude for different effects
  
//   // Rotate the scene
//   rotateX(angle);
//   rotateY(angle * 0.8);
//   rotateZ(angle * 1.2);
  
//   // Draw the cube
//   drawCube(currentSize);
  
//   // Update the size of the cube for the next frame
//   cubeSize += growthSpeed;
  
//   // If the cube size reaches the maximum or minimum, reverse the growth direction
//   if (cubeSize >= maxCubeSize || cubeSize <= 0) {
//     growthSpeed *= -1;
//   }
  
//   // Increment the rotation angle for smooth rotation
//   angle += 0.01;
// }

// function drawCube(size) {
//   // Draw a cube with the specified size
//   stroke(0);
//   fill(150);
//   box(size);
// }



// shrink and grow
// let angle = 0;
// let cubeSize = 100; // Initial size of the cube

// function setup() {
//   createCanvas(400, 400, WEBGL);
// }

// function draw() {
//   background(220);
  
//   // Calculate the size of the cube based on the mouse position
//   let maxSize = min(width, height) * 0.8; // Maximum size of the cube
//   let targetSize = map(mouseX, 0, width, maxSize, 50); // Adjust the range as needed
  
//   // Smoothly transition the cube size towards the target size
//   cubeSize = lerp(cubeSize, targetSize, 0.1);
  
//   // Rotate the scene
//   rotateX(angle);
//   rotateY(angle * 0.8);
//   rotateZ(angle * 1.2);
  
//   // Draw the cube
//   drawCube(cubeSize);
  
//   // Increment the rotation angle for smooth rotation
//   angle += 0.01;
// }

// function drawCube(size) {
//   // Draw a cube with the specified size
//   stroke(0);
//   fill(150);
//   beginShape();
//   // Front face
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   vertex(-size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Back face
//   beginShape();
//   vertex(-size / 2, -size / 2, -size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   endShape(CLOSE);
//   // Left face
//   beginShape();
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(-size / 2, -size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Right face
//   beginShape();
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Top face
//   beginShape();
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(-size / 2, -size / 2, -size / 2);
//   endShape(CLOSE);
//   // Bottom face
//   beginShape();
//   vertex(-size / 2, size / 2, size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   endShape(CLOSE);
// }



// SPINNING CUBE
// let cubeSize = 100; // Initial size of the cube
// let maxRotationSpeed = 0.02; // Maximum rotation speed

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
// }

// function draw() {
//   background(220);
  
//   // Calculate the size of the cube based on the mouse position
//   let maxSize = min(width, height) * 0.8; // Maximum size of the cube
//   let targetSize = map(mouseX, 0, width, maxSize, 50); // Adjust the range as needed
//   // Smoothly transition the cube size towards the target size
//   cubeSize = lerp(cubeSize, targetSize, 0.1);
  
//   // Calculate rotation speeds based on mouse position
//   let rotationSpeedX = map(mouseY, 0, height, -maxRotationSpeed, maxRotationSpeed);
//   let rotationSpeedY = map(mouseX, 0, width, -maxRotationSpeed, maxRotationSpeed);
  
//   // Rotate the scene
//   rotateX(frameCount * rotationSpeedX);
//   rotateY(frameCount * rotationSpeedY);
  
//   // Draw the cube
//   drawCube(cubeSize);
// }

// function drawCube(size) {
//   // Draw a cube with the specified size
//   stroke(0);
//   fill(150);
//   beginShape();
//   // Front face
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   vertex(-size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Back face
//   beginShape();
//   vertex(-size / 2, -size / 2, -size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   endShape(CLOSE);
//   // Left face
//   beginShape();
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(-size / 2, -size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Right face
//   beginShape();
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Top face
//   beginShape();
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(-size / 2, -size / 2, -size / 2);
//   endShape(CLOSE);
//   // Bottom face
//   beginShape();
//   vertex(-size / 2, size / 2, size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   endShape(CLOSE);
// }





// CUBE ROTATE

// let cubeSize = 100; // Initial size of the cube
// let maxRotationSpeed = 0.005; // Maximum rotation speed
// let rotationSpeedX, rotationSpeedY;

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
// }

// function draw() {
//   background(0);
  
//   // Calculate the size of the cube based on the mouse position
//   let maxSize = min(width, height) * 0.8; // Maximum size of the cube
//   let targetSize = map(mouseX, 0, width, maxSize, 50); // Adjust the range as needed
//   // Smoothly transition the cube size towards the target size
//   cubeSize = lerp(cubeSize, targetSize, 0.05);
  
//   // Calculate rotation speeds based on mouse position
//   rotationSpeedX = map(mouseY, 0, height, -maxRotationSpeed, maxRotationSpeed);
//   rotationSpeedY = map(mouseX, 0, width, -maxRotationSpeed, maxRotationSpeed);
  
//   // Rotate the scene
//   rotateX(frameCount * rotationSpeedX);
//   rotateY(frameCount * rotationSpeedY);
  
//   // Draw the cube
//   drawCube(cubeSize);
// }

// function drawCube(size) {
//   // Draw a cube with the specified size
//   stroke(0);
//   fill(225);
//   noStroke();
//   beginShape();
//   // Front face
//   fill(236,40,40);
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   vertex(-size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Back face
//   fill(212,43,43);
//   beginShape();
//   vertex(-size / 2, -size / 2, -size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   endShape(CLOSE);
//   // Left face
//   fill(149,10,10);
//   beginShape();
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(-size / 2, -size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Right face
//   fill(252,26,26);
//   beginShape();
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   endShape(CLOSE);
//   // Top face
//   fill(232,14,14);
//   beginShape();
//   vertex(-size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, size / 2);
//   vertex(size / 2, -size / 2, -size / 2);
//   vertex(-size / 2, -size / 2, -size / 2);
//   endShape(CLOSE);
//   // Bottom face
//   fill(83,2,2);
//   beginShape();
//   vertex(-size / 2, size / 2, size / 2);
//   vertex(size / 2, size / 2, size / 2);
//   vertex(size / 2, size / 2, -size / 2);
//   vertex(-size / 2, size / 2, -size / 2);
//   endShape(CLOSE);
// }
