// const canvasWidth = 1280;
// const canvasHeight = 720;


let x = [], y = [], speed = [], size = [];
let NumLights = 150;
let initialized = false; // so lights only set up once

function draw_one_frame(words, vocal, drum, bass, other, counter) {
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let seconds = counter/60

background(0)
rectMode(CENTER)
  // textFont('Impact'); // CSS safe font
  // textSize(10);

////////// colours
// light blue - 68, 246, 255
// dark blue - 15, 107, 255
// light pink - 255, 125, 183
// dark pink - 255, 35, 134 
// gold - 255, 204, 65
// circles = pink 
// squares = blue 

// fill(255)
//  // display "words"
//    textAlign(CENTER);
//    textSize(20);
//    text(seconds, 200, 360);
//    text(words, 640, 360);

  // Initialize background lights only once
//   if (!initialized) {
//     for (let i = 0; i < NumLights; i++) {
      
//       x[i] = random(width);
//       y[i] = random(-height, 0);
//       speed[i] = random(1, 1.5);
//       size[i] = random(6, 10);
//     }
//     initialized = true;
//   }

//   // Update + draw background lights
//   for (let i = 0; i < NumLights; i++) {
//     y[i] += speed[i];
//     if (y[i] > height) {
//       y[i] = random(-20, 0);
//       x[i] = random(width);
//     }
//   drawingContext.shadowBlur = 15
// drawingContext.shadowColor = color(255, 204, 65)
// noStroke()
//  fill(255, 204, 65, 140);
 
//     ellipse(x[i], y[i], size[i]);
//   }

// if statment 1 
if (seconds > 2.5 && seconds < 15.5 || seconds > 56 && seconds < 70 || seconds > 127.5 && seconds < 146) {
fill (255, 125, 183) // light pink
stroke (255, 125, 183)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(255, 125, 183)
  // big circles / 2, 3, 5
let vocalmapcirc = map(vocal,0, 100, 45, 85)
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

// if statment 2
if (seconds > 15.5 && seconds < 37.5) {
fill (255, 125, 183) // light pink
stroke (255, 125, 183)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(255, 125, 183)
// big circles 
let vocalmapcirc = map(vocal,0, 100, 45, 85)
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


// little circles 
fill (255, 35, 134) // dark pink
stroke (255, 35, 134)
drawingContext.shadowColor = color(255, 35, 134)
let vocalmapcircsmall = map(vocal,0, 100, 25, 60)
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

// // if statment 3
if (seconds > 37.5 && seconds < 56) {
stroke (255, 125, 183)  // light pink
strokeWeight(10)
fill(0)
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(255, 125, 183)
// big circles outline
let vocalmapcirc = map(vocal,0, 100, 45, 85)
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

// little circles outline 
stroke (255, 35, 134 )  // dark pink 
strokeWeight(8)
fill(0)
drawingContext.shadowColor = color(255, 35, 134 )
let vocalmapcircsmall = map(vocal,0, 100, 15, 40)
rect(70, 140, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(293, 70, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(181, 510, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(181, 300, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(408, 650, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(408, 440, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(523, 210, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(638, 580, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(753, 70, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(753, 280, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(868, 650, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(868, 370, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(983, 140, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(1098, 650, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(1098, 440, vocalmapcircsmall, vocalmapcircsmall, 100);
rect(1213, 70, vocalmapcircsmall, vocalmapcircsmall, 100);
}

/// back to if statment 1 

// if statment 4
if (seconds > 70 && seconds < 79.3) {

// Change colour from pink to blue 
let lightpink = color(255, 125, 183)
let lightblue = color(68, 246, 255)
let lerpAMT = map(counter-4200,0, 100, 0, 1)

lerpColor(lightpink, lightblue, lerpAMT)
fill (lerpColor(lightpink, lightblue, lerpAMT))
stroke (lerpColor(lightpink, lightblue, lerpAMT))
drawingContext.shadowBlur = 42
drawingContext.shadowColor = color(lerpColor(lightpink, lightblue, lerpAMT))

// big circles 
// change from circles to squares
let cornerRadius = map(counter-4000, 0, 222, 100, 10, true);
let vocalmapcirc = map(vocal,0, 100, 45, 73)
rect(70, 140, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(293, 70, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(181, 510, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(181, 300, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(408, 650, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(408, 440, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(523, 210, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(638, 580, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(753, 70, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(753, 280, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(868, 650, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(868, 370, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(983, 140, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(1098, 650, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(1098, 440, vocalmapcirc, vocalmapcirc, cornerRadius);
rect(1213, 70, vocalmapcirc, vocalmapcirc, cornerRadius);
}

//if statment 5
if (seconds > 79.3 && seconds < 91){
  
// square bars from top and bottom 
let lightblue = color(68, 246, 255)
let darkblue = color(15, 107, 255)
strokeWeight(1)
drawingContext.shadowBlur = 42
let drummap = map(drum,0, 100, 1, 10)
let lerpColorAmt; 
let drumColor; 

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(70, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(70, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(181, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(293, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(408, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(523, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70; 
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(638, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(753, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(868, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(983, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1098, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1213, rectstep, 60, 60, 10);
}
} 

// if statment 6
if (seconds > 91 && seconds < 123) {

// square bars from top and bottom outline
let lightblue = color(68, 246, 255)
let darkblue = color(15, 107, 255)
strokeWeight(8)
fill(0)
drawingContext.shadowBlur = 42
let drummap = map(drum,0, 100, 1, 10)
let lerpColorAmt; 
let drumColor; 

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(70, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(181, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(293, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(408, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(523, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(638, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(753, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(868, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(983, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1098, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1213, rectstep, 60, 60, 10);
}
}

// if statment 7
if (seconds > 123 && seconds < 127.5) {

// square bars from top and bottom outline with circles inisde
let lightblue = color(68, 246, 255)
let darkblue = color(15, 107, 255)
strokeWeight(8)
fill(0)
drawingContext.shadowBlur = 42
let drummap = map(drum,0, 100, 1, 10)
let lerpColorAmt; 
let drumColor; 

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(70, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(181, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(293, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(408, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(523, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(638, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(753, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(868, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(983, rectstep, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1098, -rectstep+720, 60, 60, 10);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1213, rectstep, 60, 60, 10);
}


// inside circles
let lightpink = color(255, 125, 183)
let darkpink = color(255, 35, 134)
strokeWeight(6)
fill(0)
drawingContext.shadowBlur = 42
let drummap4= map(drum,0, 100, 1, 10)
let lerpColorAmt2; 
let drumColor2; 


for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(70, rectstep, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(181, -rectstep+720, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(293, rectstep, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(408, -rectstep+720, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(523, rectstep, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(638, -rectstep+720, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(753, rectstep, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(868, -rectstep+720, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(983, rectstep, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(1098, -rectstep+720, 25, 25, 100);
}

for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(1213, rectstep, 25, 25, 100);
}

}

/// back to if statment 1 

// if statment 8
if (seconds > 146 && seconds < 201) {

// Circles and squares from top and bottom

// circles
let lightpink = color(255, 125, 183)
let darkpink = color(255, 35, 134)
strokeWeight(8)
fill(0)
drawingContext.shadowBlur = 42
let drummap = map(drum,0, 100, 1, 5)
let lerpColorAmt2; 
let drumColor2; 

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(70, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(181, -rectstep+720, 60, 60, 100);
}


for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(293, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(408, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(523, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(638, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(753, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(868, -rectstep+720, 60, 60, 100);
}


for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(983, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(1098, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1)
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2);
drawingContext.shadowColor = color(drumColor2)
stroke (drumColor2)
rect(1213, rectstep, 60, 60, 100);
}

// Squares 
let lightblue = color(68, 246, 255)
let darkblue = color(15, 107, 255)
strokeWeight(8)
fill(0)
drawingContext.shadowBlur = 42
let drummap2 = map(drum,0, 100, 1, 6)
let vocalmapcirc = map(vocal,0, 100, 55, 64)
let lerpColorAmt; 
let drumColor; 


for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(70, -rectstep+720, vocalmapcirc, vocalmapcirc, 10);
}

for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(181, rectstep, vocalmapcirc, vocalmapcirc, 10);
}

for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(293, -rectstep+720, vocalmapcirc, vocalmapcirc, 10);
}

for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(408, rectstep, vocalmapcirc, vocalmapcirc, 10);
}

for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(523, -rectstep+720, vocalmapcirc, vocalmapcirc, 10);
}

for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(638, rectstep, vocalmapcirc, vocalmapcirc, 10);
}
for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(753, -rectstep+720, vocalmapcirc, vocalmapcirc, 10);
}

for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(868, rectstep, vocalmapcirc, vocalmapcirc, 10);
}
for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(983, -rectstep+720, vocalmapcirc, vocalmapcirc, 10);
}

for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1098, rectstep, vocalmapcirc, vocalmapcirc, 10);
}

for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt);
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1213, -rectstep+720, vocalmapcirc, vocalmapcirc, 10);
}
}

// if statment 9
if (seconds > 201 && seconds < 215) {
  
// Circles bars from top and bottom  

let lightpink = color(255, 125, 183)
let darkpink = color(255, 35, 134)
strokeWeight(1)
drawingContext.shadowBlur = 42
let lerpColorAmt; 
let drumColor; 

let drummap3 = map(drum,0, 100, 1, 8)

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(70, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(181, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(293, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(408, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(523, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(638, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(753, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(868, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(983, rectstep, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1098, -rectstep+720, 60, 60, 100);
}

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1)
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt);
fill(drumColor)
drawingContext.shadowColor = color(drumColor)
stroke (drumColor)
rect(1213, rectstep, 60, 60, 100);
}
} 
}