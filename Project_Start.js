// const canvasWidth = 1280;
// const canvasHeight = 720;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let seconds = counter/60

  background(20)
  textFont('Impact'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(10);
fill (245, 187, 29)
stroke (245, 187, 29)
  //colorMode(HSB)

drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(245, 187, 29)

let starsmove = 1;

ellipse(10,starsmove++,10);
if (starsmove > 720) {
starsmove = 0
}

fill (120, 255, 255)
stroke (120, 255, 255)

drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(120, 255, 255)
// square bars from top and bottom
let drummap = map(vocal,0, 100, 1, 10)

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(70, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(181, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(293, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(408, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(523, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(638, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(753, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(868, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(983, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(1098, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(1213, rectstep, 60, 60, 10);
}


}
 