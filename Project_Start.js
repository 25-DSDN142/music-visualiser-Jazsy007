// const canvasWidth = 1280;
// const canvasHeight = 720;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let seconds = counter/60

  background(20)
  textFont('Impact'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(10);

  //colorMode(HSB)

fill(255)
drawingContext.shadowBlur = 42 
drawingContext.shadowColor = color(255)
 // display "words"
   textAlign(CENTER);
   textSize(20);
   //text(words, 640, 360);
   text(seconds, 200, 360);

if (seconds > 146 && seconds < 201) {
  // big circles / 2, 3, 5
let vocalmapcirc = map(vocal,0, 100, 50, 62)

fill (0) 
stroke (245, 187, 29) // yellow
strokeWeight(8)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(245, 187, 29)

rect(70, 70, vocalmapcirc, vocalmapcirc, 100); // cic
rect(70, 140, vocalmapcirc, vocalmapcirc, 100); // cic
rect(70, 210, vocalmapcirc, vocalmapcirc, 100); // cic
rect(70, 280, vocalmapcirc, vocalmapcirc, 100); // cic

rect(181, 650, vocalmapcirc, vocalmapcirc, 100); // cic
rect(181, 580, vocalmapcirc, vocalmapcirc, 100); // cic
rect(181, 510, vocalmapcirc, vocalmapcirc, 100); // cic
rect(181, 440, vocalmapcirc, vocalmapcirc, 100); // cic

rect(293, 70, vocalmapcirc, vocalmapcirc, 100); // cic
rect(293, 140, vocalmapcirc, vocalmapcirc, 100); // cic
rect(293, 210, vocalmapcirc, vocalmapcirc, 100); // cic
rect(293, 280, vocalmapcirc, vocalmapcirc, 100); // cic

rect(408, 650, vocalmapcirc, vocalmapcirc, 100); // cic
rect(408, 580, vocalmapcirc, vocalmapcirc, 100); // cic
rect(408, 510, vocalmapcirc, vocalmapcirc, 100); // cic
rect(408, 440, vocalmapcirc, vocalmapcirc, 100); // cic

rect(523, 70, vocalmapcirc, vocalmapcirc, 100); // cic
rect(523, 140, vocalmapcirc, vocalmapcirc, 100); // cic
rect(523, 210, vocalmapcirc, vocalmapcirc, 100); // cic
rect(523, 280, vocalmapcirc, vocalmapcirc, 100); // cic

rect(638, 650, vocalmapcirc, vocalmapcirc, 100); // cic
rect(638, 580, vocalmapcirc, vocalmapcirc, 100); // cic
rect(638, 510, vocalmapcirc, vocalmapcirc, 100); // cic
rect(638, 440, vocalmapcirc, vocalmapcirc, 100); // cic

rect(753, 70, vocalmapcirc, vocalmapcirc, 100);// cic
rect(753, 140, vocalmapcirc, vocalmapcirc, 100);// cic
rect(753, 210, vocalmapcirc, vocalmapcirc, 100);// cic
rect(753, 280, vocalmapcirc, vocalmapcirc, 100);// cic

rect(868, 650, vocalmapcirc, vocalmapcirc, 100); // cic
rect(868, 580, vocalmapcirc, vocalmapcirc, 100); // cic
rect(868, 510, vocalmapcirc, vocalmapcirc, 100); // cic
rect(868, 440, vocalmapcirc, vocalmapcirc, 100); // cic

rect(983, 70, vocalmapcirc, vocalmapcirc, 100);// cic
rect(983, 140, vocalmapcirc, vocalmapcirc, 100);// cic
rect(983, 210, vocalmapcirc, vocalmapcirc, 100);// cic
rect(983, 280, vocalmapcirc, vocalmapcirc, 100);// cic

rect(1098, 650, vocalmapcirc, vocalmapcirc, 100); // cic
rect(1098, 580, vocalmapcirc, vocalmapcirc, 100); // cic
rect(1098, 510, vocalmapcirc, vocalmapcirc, 100); // cic
rect(1098, 440, vocalmapcirc, vocalmapcirc, 100); // cic

rect(1213, 70, vocalmapcirc, vocalmapcirc, 100);// cic
rect(1213, 140, vocalmapcirc, vocalmapcirc, 100);// cic
rect(1213, 210, vocalmapcirc, vocalmapcirc, 100);// cic
rect(1213, 280, vocalmapcirc, vocalmapcirc, 100);// cic

fill (0)
stroke (120, 255, 255) // cyan 
strokeWeight(8)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(120, 255, 255)
/// rectangles 
rect(70, 650, vocalmapcirc, vocalmapcirc, 10); // rect
rect(70, 580, vocalmapcirc, vocalmapcirc, 10); // rect
rect(70, 510, vocalmapcirc, vocalmapcirc, 10); // rect
rect(70, 440, vocalmapcirc, vocalmapcirc, 10); // rect

rect(181, 70, vocalmapcirc, vocalmapcirc, 10); //rect
rect(181, 140, vocalmapcirc, vocalmapcirc, 10); //rect
rect(181, 210, vocalmapcirc, vocalmapcirc, 10); //rect
rect(181, 280, vocalmapcirc, vocalmapcirc, 10); //rect

rect(293, 650, vocalmapcirc, vocalmapcirc, 10); // rect
rect(293, 580, vocalmapcirc, vocalmapcirc, 10); // rect
rect(293, 510, vocalmapcirc, vocalmapcirc, 10); // rect
rect(293, 440, vocalmapcirc, vocalmapcirc, 10); // rect

rect(408, 70, vocalmapcirc, vocalmapcirc, 10); //rect
rect(408, 140, vocalmapcirc, vocalmapcirc, 10); //rect
rect(408, 210, vocalmapcirc, vocalmapcirc, 10); //rect
rect(408, 280, vocalmapcirc, vocalmapcirc, 10); //rect

rect(523, 650, vocalmapcirc, vocalmapcirc, 10); // rect
rect(523, 580, vocalmapcirc, vocalmapcirc, 10); // rect
rect(523, 510, vocalmapcirc, vocalmapcirc, 10); // rect
rect(523, 440, vocalmapcirc, vocalmapcirc, 10); // rect

rect(638, 70, vocalmapcirc, vocalmapcirc, 10); //rect
rect(638, 140, vocalmapcirc, vocalmapcirc, 10); //rect
rect(638, 210, vocalmapcirc, vocalmapcirc, 10); //rect
rect(638, 280, vocalmapcirc, vocalmapcirc, 10); //rect

rect(753, 650, vocalmapcirc, vocalmapcirc, 10); // rect
rect(753, 580, vocalmapcirc, vocalmapcirc, 10); // rect
rect(753, 510, vocalmapcirc, vocalmapcirc, 10); // rect
rect(753, 440, vocalmapcirc, vocalmapcirc, 10); // rect

rect(868, 70, vocalmapcirc, vocalmapcirc, 10); //rect
rect(868, 140, vocalmapcirc, vocalmapcirc, 10); //rect
rect(868, 210, vocalmapcirc, vocalmapcirc, 10); //rect
rect(868, 280, vocalmapcirc, vocalmapcirc, 10); //rect

rect(983, 650, vocalmapcirc, vocalmapcirc, 10); // rect
rect(983, 580, vocalmapcirc, vocalmapcirc, 10); // rect
rect(983, 510, vocalmapcirc, vocalmapcirc, 10); // rect
rect(983, 440, vocalmapcirc, vocalmapcirc, 10); // rect

rect(1098, 70, vocalmapcirc, vocalmapcirc, 10); //rect
rect(1098, 140, vocalmapcirc, vocalmapcirc, 10); //rect
rect(1098, 210, vocalmapcirc, vocalmapcirc, 10); //rect
rect(1098, 280, vocalmapcirc, vocalmapcirc, 10); //rect

rect(1213, 650, vocalmapcirc, vocalmapcirc, 10); // rect
rect(1213, 580, vocalmapcirc, vocalmapcirc, 10); // rect
rect(1213, 510, vocalmapcirc, vocalmapcirc, 10); // rect
rect(1213, 440, vocalmapcirc, vocalmapcirc, 10); // rect
}



if (seconds > 2.5 && seconds < 15.5 || seconds > 56 && seconds < 70 || seconds > 124.5 && seconds < 146) {
fill (245, 187, 29) // yellow
stroke (245, 187, 29)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(245, 187, 29)
  // big circles / 2, 3, 5
let vocalmapcirc = map(vocal,0, 100, 45, 80)
rect(70, 140, vocalmapcirc, vocalmapcirc, 100);
rect(293, 70, vocalmapcirc, vocalmapcirc, 100);
rect(181, 510, vocalmapcirc, vocalmapcirc, 100);
rect(181, 300, vocalmapcirc, vocalmapcirc, 100);
rect(408, 650, vocalmapcirc, vocalmapcirc, 100);
rect(408, 440, vocalmapcirc, vocalmapcirc, 100);
rect(523, 210, vocalmapcirc, vocalmapcirc, 100);
rect(638, 580, vocalmapcirc, vocalmapcirc, 100);
rect(753, 70, vocalmapcirc, vocalmapcirc, 100);
rect(753, 280, vocalmapcirc, vocalmapcirc, 100);
rect(868, 650, vocalmapcirc, vocalmapcirc, 100);
rect(868, 370, vocalmapcirc, vocalmapcirc, 100);
rect(983, 140, vocalmapcirc, vocalmapcirc, 100);
rect(1098, 650, vocalmapcirc, vocalmapcirc, 100);
rect(1098, 440, vocalmapcirc, vocalmapcirc, 100);
rect(1213, 70, vocalmapcirc, vocalmapcirc, 100);
}

if (seconds > 37.5 && seconds < 56) {
stroke (245, 187, 29)
strokeWeight(10)
fill(0)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(245, 187, 29)
  // big circles outline / 4
let vocalmapcirc = map(vocal,0, 100, 45, 80)
rect(70, 140, vocalmapcirc, vocalmapcirc, 100);
rect(293, 70, vocalmapcirc, vocalmapcirc, 100);
rect(181, 510, vocalmapcirc, vocalmapcirc, 100);
rect(181, 300, vocalmapcirc, vocalmapcirc, 100);
rect(408, 650, vocalmapcirc, vocalmapcirc, 100);
rect(408, 440, vocalmapcirc, vocalmapcirc, 100);
rect(523, 210, vocalmapcirc, vocalmapcirc, 100);
rect(638, 580, vocalmapcirc, vocalmapcirc, 100);
rect(753, 70, vocalmapcirc, vocalmapcirc, 100);
rect(753, 280, vocalmapcirc, vocalmapcirc, 100);
rect(868, 650, vocalmapcirc, vocalmapcirc, 100);
rect(868, 370, vocalmapcirc, vocalmapcirc, 100);
rect(983, 140, vocalmapcirc, vocalmapcirc, 100);
rect(1098, 650, vocalmapcirc, vocalmapcirc, 100);
rect(1098, 440, vocalmapcirc, vocalmapcirc, 100);
rect(1213, 70, vocalmapcirc, vocalmapcirc, 100);
}

if (seconds > 15.5 && seconds < 37.5) {
fill (245, 187, 29) // yellow
stroke (245, 187, 29)
strokeWeight(1)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(245, 187, 29)
  // big circles / 2, 3, 5
let vocalmapcirc = map(vocal,0, 100, 45, 80)
rect(70, 140, vocalmapcirc, vocalmapcirc, 100);
rect(293, 70, vocalmapcirc, vocalmapcirc, 100);
rect(181, 510, vocalmapcirc, vocalmapcirc, 100);
rect(181, 300, vocalmapcirc, vocalmapcirc, 100);
rect(408, 650, vocalmapcirc, vocalmapcirc, 100);
rect(408, 440, vocalmapcirc, vocalmapcirc, 100);
rect(523, 210, vocalmapcirc, vocalmapcirc, 100);
rect(638, 580, vocalmapcirc, vocalmapcirc, 100);
rect(753, 70, vocalmapcirc, vocalmapcirc, 100);
rect(753, 280, vocalmapcirc, vocalmapcirc, 100);
rect(868, 650, vocalmapcirc, vocalmapcirc, 100);
rect(868, 370, vocalmapcirc, vocalmapcirc, 100);
rect(983, 140, vocalmapcirc, vocalmapcirc, 100);
rect(1098, 650, vocalmapcirc, vocalmapcirc, 100);
rect(1098, 440, vocalmapcirc, vocalmapcirc, 100);
rect(1213, 70, vocalmapcirc, vocalmapcirc, 100);


  // little circles / 3,5
let vocalmapcircsmall = map(vocal,0, 100, 25, 55)
rect(70, 420, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(70, 560, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(293, 210, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(293, 420, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(293, 560, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(181, 160, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(181, 640, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(408, 300, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(408, 90, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(523, 420, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(523, 630, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(638, 300, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(638, 90, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(753, 420, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(753, 630, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(868, 510, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(868, 160, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(983, 490, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(983, 280, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(983, 630, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(1098, 300, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(1098, 160, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(1213, 280, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(1213, 420, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(1213, 630, vocalmapcircsmall, vocalmapcircsmall, 100);

}

// // ellipse(10,0++,10);
// // if (starsmove > 720) {
// // starsmove = 0
// // }

if (seconds > 201 && seconds < 215) {
  
// circs bars from top and bottom / end
fill (245, 187, 29) 
stroke (245, 187, 29) // yellow
strokeWeight(1)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(245, 187, 29)

let drummap = map(drum,0, 100, 1, 4)

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(70, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(181, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(293, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(408, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(523, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(638, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(753, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(868, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(983, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(1098, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
rect(1213, rectstep, 60, 60, 100);
}
} 

if (seconds > 79 && seconds < 122) {
  
// square bars from top and bottom / 7
fill (120, 255, 255)
stroke (120, 255, 255) // cyan 
strokeWeight(1)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(120, 255, 255)

let drummap = map(drum,0, 100, 1, 10)

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

if (seconds > 91 && seconds < 120) {
// square bars from top and bottom outline / 8
stroke (120, 255, 255) // cyan 
strokeWeight(8)
fill(0)

drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(120, 255, 255)

let drummap = map(drum,0, 100, 1, 10)

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
}
 