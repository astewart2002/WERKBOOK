var song;
var amp;
var button;

var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('data/EXPERIMENTAL.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.position(windowWidth - 100, 20);
  // button.fill(225);
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(236,36,36);
  strokeWeight(2);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 10, 100);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x*5, y*5);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  //ellipse(100, 100, 200, vol * 200);
}
