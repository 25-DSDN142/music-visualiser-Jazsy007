// const canvasWidth = 1280;
// const canvasHeight = 720;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let seconds = counter/60

  background(20)
  rectMode(CENTER)
  colorMode(HSB, 100)
fill (drum, 70, 100)
stroke (drum, 70, 100)

drawingContext.shadowBlur = 50
drawingContext.shadowColor = color(drum, 70, 100)


let drummap = map(drum,0, 100, 20, 110)
let blue = color(91, 78, 100)
let pink = color(52, 78, 100)
let lerpAMT = map(vocal,0, 100, 0, 1)
let ellipseY = 360
let ellipsesize = 100


for(let i = 1; i < drummap; i++) {
let ellipsestep = i*12;
ellipse(ellipsestep, ellipseY, ellipsesize); 
}

lerpColor(blue, pink, lerpAMT)
fill (lerpColor(blue, pink, lerpAMT))
stroke (lerpColor(blue, pink, lerpAMT))
drawingContext.shadowColor = lerpColor(blue, pink, lerpAMT)
ellipse(200, 155, 50); 
ellipse(640, 155, 50); 
ellipse(1080, 155, 50); 
ellipse(200, 565, 50); 
ellipse(640, 565, 50); 
ellipse(1080, 565, 50); 

// for(let i = 1; i < 6; i++) {
// let ellipsestep = i*200;
// ellipse(ellipsestep, ellipseY, ellipsesize); 
// }

} 
