// const canvasWidth = 1280;
// const canvasHeight = 720;

let vocalellipse;
let drumellipse;
let bassellipse;
let otherellipse;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
// vocal, drum, bass, and other are volumes ranging from 0 to 100


  background(20)
  textFont('Impact'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(10);
  //colorMode(HSB)
 
  vocalellipse = map(vocal, 0, 100, 30, 200)
  drumellipse = map(drum, 0, 100, 30, 200)
  bassellipse = map(bass, 0, 100, 30, 200)
  otherellipse = map(other, 0, 100, 30, 200)


// Vocal Ellipse
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(120, 255, 255)
fill(120, 255, 255)
stroke(120, 255, 255)
ellipse(376, 240, vocalellipse)

// Drum Ellipse
drawingContext.shadowBlur = 42 
drawingContext.shadowColor = color(255, 117, 223)
fill(255, 117, 223)
stroke(255, 117, 223)
ellipse(902, 240, drumellipse)

// Bass Ellipse
drawingContext.shadowBlur = 42 
drawingContext.shadowColor = color(0, 54, 214)
fill(0, 54, 214)
stroke(0, 54, 214)
ellipse(376, 480, bassellipse)

// Other Ellipse
drawingContext.shadowBlur = 42 
drawingContext.shadowColor = color(171, 3, 90)
fill(171, 3, 90)
stroke(171, 3, 90)
ellipse(902, 480, otherellipse)


fill(255)
drawingContext.shadowBlur = 42 
drawingContext.shadowColor = color(255)
 // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, 640, 360);
}