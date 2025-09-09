// const canvasWidth = 1280;
// const canvasHeight = 720;

// set up for background lights 
let x = [], y = [], speed = [], size = [];
let NumLights = 150;
let initialized = false; // so lights only set up once

function draw_one_frame(words, vocal, drum, bass, other, counter) {
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let seconds = counter/60 // used for working out the if statements 

background(0) // black background 
rectMode(CENTER)

// /////////// to delete 
//   textFont('Impact'); // CSS safe font
//   textSize(10);

// //////// colours
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
// //   // text(words, 640, 360);
// ////////////


 // Initialize background lights only once
  if (!initialized) {
    for (let i = 0; i < NumLights; i++) {
      
      x[i] = random(width);
      y[i] = random(-height, 0);
      speed[i] = random(1, 1.5);
      size[i] = random(6, 10);
    }
    initialized = true;
  }

  // Update + draw background lights
  for (let i = 0; i < NumLights; i++) {
    y[i] += speed[i];
    if (y[i] > height) {
      y[i] = random(-20, 0);
      x[i] = random(width);
    }
  drawingContext.shadowBlur = 20 // minimal glow on background lights 
drawingContext.shadowColor = color(255, 204, 65) // yellow colour 
noStroke()
let opacitymap = map(bass,0, 100, 105, 210) // map based on bass volume 
 fill(255, 204, 65, opacitymap); // yellow colour with opacity that changes based on the bass
    ellipse(x[i], y[i], size[i]);
  }

// if statement 1 
if (seconds > 2.5 && seconds < 15.5 || seconds > 56 && seconds < 70) {
drawingContext.shadowBlur = 42 // standard glow amount 

let vocalopacity = map(vocal,0, 100, 160, 255)
 // big pink circles, size based on vocals
fill (255, 125, 183, vocalopacity) // light pink
stroke (255, 125, 183, 0) // light pink
drawingContext.shadowColor = color(255, 125, 183, vocalopacity) // light pink 

let vocalmapcirc = map(vocal,0, 100, 45, 85) // map based on vocal volume 
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

// if statement 2
if (seconds > 15.5 && seconds < 37.8) {
drawingContext.shadowBlur = 42 // standard glow amount 

let vocalopacity = map(vocal,0, 100, 160, 255)
 // big pink circles, size based on vocals
fill (255, 125, 183, vocalopacity) // light pink
stroke (255, 125, 183, 0) // light pink
drawingContext.shadowColor = color(255, 125, 183, vocalopacity) // light pink

let vocalmapcirc = map(vocal,0, 100, 45, 85) // map based on vocal volume 
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


 // little pink circles, size based on vocals
fill (255, 35, 134, vocalopacity) // dark pink
stroke (255, 35, 134, 0) // dark pink
drawingContext.shadowColor = color(255, 35, 134, vocalopacity) // dark pink

let vocalmapcircsmall = map(vocal,0, 100, 25, 60) // map based on vocal volume 
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

// if statement 3
if (seconds > 37.8 && seconds < 56) {
drawingContext.shadowBlur = 42 // standard glow amount 
let vocalopacity = map(vocal,0, 100, 160, 255)
// big pink circles outline, size based on vocals
stroke (255, 125, 183, vocalopacity) // light pink
strokeWeight(10)
fill(0) // only shows the stroke/outline of the circles 
drawingContext.shadowColor = color(255, 125, 183, vocalopacity) // light pink

let vocalmapcirc = map(vocal,0, 100, 45, 85) // map based on vocal volume 
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

// little pink circles outline, size based on vocals
stroke (255, 35, 134, vocalopacity) // dark pink 
strokeWeight(8)
fill(0) // only shows the stroke/outline of the circles 
drawingContext.shadowColor = color(255, 35, 134, vocalopacity) // dark pink 

let vocalmapcircsmall = map(vocal,0, 100, 15, 40) // map based on vocal volume 
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

// back to if statement 1 

// if statement 4
if (seconds > 70 && seconds < 79.3) {

// Change colour from pink to blue 
strokeWeight(0)
let vocalopacity = map(vocal,0, 100, 160, 255)
let lightpink = color(255, 125, 183, vocalopacity) // light pink 
let lightblue = color(68, 246, 255, vocalopacity) // light blue 
let lerpAMT = map(counter-4380,0, 100, 0, 1) // sets timing of colour change 

lerpColor(lightpink, lightblue, lerpAMT) // changes colour from pink to blue 
fill (lerpColor(lightpink, lightblue, lerpAMT)) // changes colour from pink to blue 
stroke (lerpColor(lightpink, lightblue, lerpAMT)) // changes colour from pink to blue 
drawingContext.shadowBlur = 42 // standard glow amount 
drawingContext.shadowColor = color(lerpColor(lightpink, lightblue, lerpAMT)) // changes colour from pink to blue 

 // big pink circles change to big blue squares, size based on vocals
let cornerRadius = map(counter-4200, 0, 222, 100, 10, true); // adjusts corner radius in time with colour change
let vocalmapcirc = map(vocal,0, 100, 45, 80) // map based on vocal volume 
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

//if statement 5
if (seconds > 79.3 && seconds < 91){
drawingContext.shadowBlur = 42 // standard glow amount 

let lightblue = color(68, 246, 255) // light blue 
let darkblue = color(15, 107, 255) // dark blue 
strokeWeight(0)
let lerpColorAmt; 
let drumColor; 
let drummap = map(drum,0, 100, 1, 10) // map based on drum volume 

// blue squares rise and fall from top and bottom of screen, amount of squares based on drum 
for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1) // sets colour change amount based on a map which is based in number of squares displayed
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt); // changes colour from light blue to dark blue based on number of squares displayed
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

// if statement 6
if (seconds > 91 && seconds < 123) {
drawingContext.shadowBlur = 42 // standard glow amount 
let lightblue = color(68, 246, 255) // light blue
let darkblue = color(15, 107, 255) // dark blue 
strokeWeight(8)
fill(0)
let drummap = map(drum,0, 100, 1, 10) // map based on drum volume 
let lerpColorAmt; 
let drumColor; 

// blue squares outline rise and fall from top and bottom of screen, amount of squares based on drum 
for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1) // sets colour change amount based on a map which is based on number of squares displayed
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt); // changes colour from light blue to dark blue based on number of squares displayed
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

// if statement 7
if (seconds > 123 && seconds < 127.5) {
drawingContext.shadowBlur = 42 // standard glow amount 

// blue squares outline rise and fall from top and bottom of screen, amount of squares based on drum 
let lightblue = color(68, 246, 255) // light blue 
let darkblue = color(15, 107, 255) // dark blue 
strokeWeight(8)
fill(0)
let drummap = map(drum,0, 100, 1, 10) // map based on drum volume 
let lerpColorAmt; 
let drumColor; 

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1) // sets colour change amount based on a map which is based on number of squares displayed
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt); // changes colour from light blue to dark blue based on number of squares displayed
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

// pink circles outline are in blue squares outline and rise and fall from top and bottom of screen, amount based on drum 
let lightpink = color(255, 125, 183) // light pink 
let darkpink = color(255, 35, 134) // dark pink 
strokeWeight(6)
fill(0)
let drummap4= map(drum,0, 100, 1, 10) // map based on drum volume 
let lerpColorAmt2; 
let drumColor2; 


for(let i = 1; i < drummap4; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1) // sets colour change amount based on a map which is based on number of circles displayed
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2); // changes colour from light pink to dark pink based on number of circles displayed
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

// if statement 8
if (seconds > 127.5 && seconds < 146) {
drawingContext.shadowBlur = 42 // standard glow amount 

// big blue squares, size based on vocals
let vocalopacity = map(vocal,0, 100, 160, 255)
fill (68, 246, 255, vocalopacity) // light blue
stroke (68, 246, 255, 0) // light pink
drawingContext.shadowColor = color(68, 246, 255, vocalopacity) // light blue

let vocalmapcirc = map(vocal,0, 100, 45, 73) // map based on vocal volume 
rect(70, 140, vocalmapcirc, vocalmapcirc, 10);
rect(293, 70, vocalmapcirc, vocalmapcirc, 10);
rect(181, 510, vocalmapcirc, vocalmapcirc, 10);
rect(181, 300, vocalmapcirc, vocalmapcirc, 10);
rect(408, 650, vocalmapcirc, vocalmapcirc, 10);
rect(408, 440, vocalmapcirc, vocalmapcirc, 10);
rect(523, 210, vocalmapcirc, vocalmapcirc, 10);
rect(638, 580, vocalmapcirc, vocalmapcirc, 10);
rect(753, 70, vocalmapcirc, vocalmapcirc, 10);
rect(753, 280, vocalmapcirc, vocalmapcirc, 10);
rect(868, 650, vocalmapcirc, vocalmapcirc, 10);
rect(868, 370, vocalmapcirc, vocalmapcirc, 10);
rect(983, 140, vocalmapcirc, vocalmapcirc, 10);
rect(1098, 650, vocalmapcirc, vocalmapcirc, 10);
rect(1098, 440, vocalmapcirc, vocalmapcirc, 10);
rect(1213, 70, vocalmapcirc, vocalmapcirc, 10);
}

// if statement 9
if (seconds > 146 && seconds < 201.5) {
drawingContext.shadowBlur = 42 // standard glow amount 

// pink circles outline rise and fall from top and bottom of screen, amount of circles based on drum 
let lightpink = color(255, 125, 183) // light pink 
let darkpink = color(255, 35, 134) // dark pink 
strokeWeight(8)
fill(0)
let drummap = map(drum,0, 100, 1, 4) // map based on drum volume 
let lerpColorAmt2; 
let drumColor2; 

for(let i = 1; i < drummap; i++) {
let rectstep = i*70;
lerpColorAmt2 = map(i, 1, 7, 0,1) // sets colour change amount based on a map which is based on number of circles displayed
drumColor2 = lerpColor(lightpink, darkpink, lerpColorAmt2); // changes colour from light pink to dark pink based on number of circles displayed
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

// blue squares outline rise and fall from top and bottom of screen, amount of squares based on drum 
let lightblue = color(68, 246, 255) // light blue 
let darkblue = color(15, 107, 255) // dark blue 
strokeWeight(8)
fill(0)
let drummap2 = map(drum,0, 100, 1, 5) // map based on drum volume 
let vocalmapcirc = 60 // map(vocal,0, 100, 55, 64)
let lerpColorAmt; 
let drumColor; 


for(let i = 1; i < drummap2; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1) // sets colour change amount based on a map which is based on number of squares displayed
drumColor = lerpColor(lightblue, darkblue, lerpColorAmt); // changes colour from light blue to dark blue based on number of squares displayed
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

// if statement 10
if (seconds > 201.5 && seconds < 215) {
drawingContext.shadowBlur = 42 // standard glow amount 

// pink circles rise and fall from top and bottom of screen, amount of circles based on drum 
let lightpink = color(255, 125, 183) // light pink 
let darkpink = color(255, 35, 134) // dark pink 
strokeWeight(1)
let lerpColorAmt; 
let drumColor; 
let drummap3 = map(drum,0, 100, 1, 8) // map based on drum volume 

for(let i = 1; i < drummap3; i++) {
let rectstep = i*70;
lerpColorAmt = map(i, 1, 7, 0,1) // sets colour change amount based on a map which is based on number of circles displayed
drumColor = lerpColor(lightpink, darkpink, lerpColorAmt); // changes colour from light pink to dark pink based on number of circles displayed
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