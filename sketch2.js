// let BG = "0";
// let FG = "238,31,31"

// function setup(){
//   createCanvas(800,800);
// }

// function draw(){
//   background(0);
//   fill(FG);
//   noStroke();

//   let tilesX = 4;
//   let tilesY = tilesX;

//   let tileW = width/tilesX;
//   let tileH = height/tilesY;

//   for (let x = 0; x < tilesX; x++){
//     for (let y = 0; y < tilesY; y++){
//       let posX = tileW *x;
//       let posY = tileH *y;

//       let wave = sin(radians(frameCount));
//       let mappedWave = map(wave,a1,1,0,5);


//       let selector = int(random(5));

//       push();
//       translate(posX, posY);
//       if (selector == 0){
//         arc(0,0,tileW*2,tileH*2,radians(0), radians(90));
//       } else if (selector == 1){
//         arc(tileW,0,tileW*2,tileH*2,radians(90), radians(180));
//       } else if (selector == 2){
//         arc(tileW,tileH,tileW*2,tileH*2,radians(180), radians(270));
//       } else if (selector == 3){
//         arc(0,tileH,tileW*2,tileH*2,radians(270), radians(360));
//       } else {
//         rect(0,0,tileW, tileH)
//       }
  
//       pop();
//     }
//   }
// }





// pretty pattern thing
// let bg = '#000000';
// let fg = '#ff0000';

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(bg);
//   fill(fg);
//   noStroke();

//   let tilesX = 4;
//   let tilesY = tilesX;

//   let tileW = width / tilesX;
//   let tileH = height / tilesY;

//   for (let x = 0; x < tilesX; x++) {
//     for (let y = 0; y < tilesY; y++) {
//       let posX = tileW * x;
//       let posY = tileH * y;

//       let wave = sin(radians(frameCount + x * 10 + y * 10));
//       let mappedWave = map(wave, -1, 1, 0, 5);

//       let selector = int(mappedWave);

//       push();
//       translate(posX, posY);
//       if (selector == 0) {
//         arc(0, 0, tileW * 2, tileH * 2, radians(0), radians(90));
//       } else if (selector == 1) {
//         arc(tileW, 0, tileW * 2, tileH * 2, radians(90), radians(180));
//       } else if (selector == 2) {
//         arc(tileW, tileH, tileW * 2, tileH * 2, radians(180), radians(270));
//       } else if (selector == 3) {
//         arc(0, tileH, tileW * 2, tileH * 2, radians(270), radians(360));
//       } else {
//         rect(0, 0, tileW, tileH);
//       }

//       pop();
//     }
//   }
// }


// RANDOM BLOBs
// let blobs = [];
// let numBlobs = 50;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   for (let i = 0; i < numBlobs; i++) {
//     blobs.push(createBlob());
//   }
// }

// function draw() {
//   background(300);
//   for (let i = 0; i < blobs.length; i++) {
//     blobs[i].display();
//     blobs[i].move();
//     for (let j = 0; j < blobs.length; j++) {
//       if (i !== j && dist(blobs[i].x, blobs[i].y, blobs[j].x, blobs[j].y) < 150) {
//         blobs[i].connect(blobs[j]);
//       }
//     }
//   }
// }

// function createBlob() {
//   let blob = {
//     x: random(width),
//     y: random(height),
//     radius: random(25, 90),
//     speedX: random(3, 1),
//     speedY: random(4, 1),
//     display: function() {
//       noStroke();
//       fill(236,36,36);
//       ellipse(this.x, this.y, this.radius * 2);
//     },
//     move: function() {
//       this.x += this.speedX;
//       this.y += this.speedY;
//       if (this.x < 0 || this.x > width) {
//         this.speedX *= -1;
//       }
//       if (this.y < 0 || this.y > height) {
//         this.speedY *= -1;
//       }
//     },
//     connect: function(otherBlob) {
//       stroke(255, 150);
//       strokeWeight(2,0);
//       line(this.x, this.y, otherBlob.x, otherBlob.y);
//     }
//   };
//   return blob;
// }




// BLOBBYS
// let blobs = [];
// let numBlobs = 60;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   for (let i = 0; i < numBlobs; i++) {
//     blobs.push(createBlob());
//   }
// }

// function draw() {
//   background(300);
//   for (let i = 0; i < blobs.length; i++) {
//     blobs[i].display();
//     blobs[i].move();
//     blobs[i].connectToMouse(mouseX, mouseY); // Call connectToMouse function for each blob
//     for (let j = 0; j < blobs.length; j++) {
//       if (i !== j && dist(blobs[i].x, blobs[i].y, blobs[j].x, blobs[j].y) < 150) {
//         blobs[i].connect(blobs[j]);
//       }
//     }
//   }
// }





// function createBlob() {
//   let blob = {
//     x: random(width),
//     y: random(height),
//     radius: random(25, 90),
//     speedX: random(3, 1),
//     speedY: random(4, 1),

//     display: function() {
//       noStroke();
//       fill(236,36,36,200);
//       ellipse(this.x, this.y, this.radius * 2);
//     },
//     move: function() {
//       this.x += this.speedX;
//       this.y += this.speedY;
//       if (this.x < 0 || this.x > width) {
//         this.speedX *= -1;
//       }
//       if (this.y < 0 || this.y > height) {
//         this.speedY *= -1;
//       }
//     },
//     connect: function(otherBlob) {
//       stroke(255, 150);
//       strokeWeight(2,0);
//       line(this.x, this.y, otherBlob.x, otherBlob.y);
//     },
//     connectToMouse: function(mouseX, mouseY) { // Function to connect blob to mouse
//       let d = dist(this.x, this.y, mouseX, mouseY);
//       if (d < 250) {
//         stroke(255, 150);
//         strokeWeight(2);
//         line(this.x, this.y, mouseX, mouseY);
//       }
//     }
//   };
//   return blob;
// }





// BLOB
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   fill(0);
//   noStroke();
//   rectMode(CENTER);
//   frameRate(80);
//   noiseDetail(2, 0.9);
// }

// function draw() {
//   background(300);
//   for (var x = 30; x < width; x += 10) {
//     for (var y = 30; y < height; y += 10) {
//       var distance = dist(x, y, mouseX - 0.005, mouseY - 0.005);
//       var mappedDistance = map(distance, 0, width, 0, 1);
//       var n = noise(x * 0.005, y * 0.005, frameCount * 0.03 * mappedDistance);
//       push();
//       translate(x, y);
//       rotate(TWO_PI * n);
//       scale(12 * n * mappedDistance);
 
//       if (mouseIsPressed) {
//         fill(255, 0, 0); // Change color to red if clicked
//       } else {
//         fill(0); // Otherwise, keep the color black
//       }
//       rect(4, 3, 2.5, 2.5);
//       pop();
//     }
//   }
// }



let squares = []; // Array to store squares
let maxRedSquares = 80; // Maximum number of red squares
let paintRadius = 50; // Radius for painting squares red

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  noStroke();
  rectMode(CENTER);
  frameRate(70);
  noiseDetail(2, 0.9);

  // Initialize the squares
  for (var x = 20; x < width; x += 10) {
    for (var y = 10; y < height; y += 10) {
      squares.push({x: x, y: y, red: false}); // Store the position and color state of each square
    }
  }
}

function draw() {
  background(300);
  let redCount = 0; // Count the number of red squares

  for (var i = 0; i < squares.length; i++) {
    var square = squares[i];
    var x = square.x;
    var y = square.y;

    var n = noise(x * 0.005, y * 0.005, frameCount * 0.04);
    push();
    translate(x, y);
    rotate(TWO_PI * n);
    scale(10 * n);

    // Check if mouse position is within the painting radius of the square
    if (dist(mouseX, mouseY, x, y) <= paintRadius) {
      if (redCount < maxRedSquares) {
        square.red = true; // Set the square to red if within the radius and within the limit
        redCount++;
      }
    }

    // Draw the square and fill it red if it's set to red
    if (square.red) {
      fill(255, 0, 0);
    } else {
      fill(0);
    }
    
    rect(3, 2, 1.5, 1.5);
    pop();
  }
}
