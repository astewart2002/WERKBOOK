let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;
let runningText = [6];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
}

function draw() {
  // Draw nothing in draw() as we'll be drawing text in showResult()
}

function showResult() {
  if (speechRec.resultValue === true) {
    let x = random(width);
    let y = random(height);
    let size = random(12, 70);
    let redShade = random(150, 255); // Random shade of red
    runningText.push({ text: speechRec.resultString, x: x, y: y, size: size, redShade: redShade });
    background(0);
    for (let i = 0; i < runningText.length; i++) {
      let word = runningText[i];
      fill(word.redShade, 0, 0); // Set fill color to red shade
      textSize(word.size); // Set text size
      text(word.text, word.x, word.y);
    }
  }
}

function gotSpeech() {
  if (speechRec.resultValue) {
    createP(speechRec.resultString);
  }
}

