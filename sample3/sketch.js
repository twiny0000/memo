let x = 0; 
let y = 0; 
let bgR = 180, bgG = 210, bgB = 255; 
let sR = 80, sG = 100, sB = 180; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(bgR, bgG, bgB); 
  let mx = map(mouseX, 0, width, -3, 3);
  let my = map(mouseY, 0, height, -2, 2);

  noStroke();
  fill(230, 200, 190);
  rect(275 + x, 250 + y, 50, 150);

  
  fill(sR, sG, sB);
  arc(300 + x, 440 + y, 430, 200, PI, TWO_PI);
  fill(230, 200, 190);
  arc(300 + x, 340 + y, 75, 40, 0, PI);


  fill(230, 200, 190);
  ellipse(205 + x, 215 + y, 30, 45);
  ellipse(395 + x, 215 + y, 30, 45); 

  ellipse(300 + x, 210 + y, 190, 220);

  fill(35); 
  beginShape();
  for (let a = PI; a <= TWO_PI; a += 0.05) {
    let hx = (300 + x) + cos(a) * 105;
    let hy = (175 + y) + sin(a) * 90;
    vertex(hx, hy);
  }
  vertex(405 + x, 175 + y);
  vertex(315 + x, 175 + y);
  vertex(300 + x, 150 + y);
  vertex(285 + x, 175 + y);
  vertex(195 + x, 175 + y);
  endShape(CLOSE);

  quad(195 + x, 175 + y, 210 + x, 175 + y, 210 + x, 220 + y, 200 + x, 210 + y);
  quad(390 + x, 175 + y, 405 + x, 175 + y, 400 + x, 210 + y, 390 + x, 220 + y);
  
  stroke(43); 
  strokeWeight(2); 
  noFill(); 
  bezier(280+x, 95+y, 250+x, 120+y, 260+x, 140+y, 240+x, 155+y);
  bezier(295+x, 93+y, 280+x, 130+y, 280+x, 150+y, 265+x, 160+y);
  bezier(305+x, 90+y, 300+x, 120+y, 310+x, 130+y, 300+x, 140+y);
  bezier(320+x, 93+y, 330+x, 120+y, 340+x, 140+y, 335+x, 160+y);
  bezier(330+x, 95+y, 350+x, 120+y, 355+x, 140+y, 360+x, 155+y);


  stroke(35);
  strokeWeight(4);
  line(240+x, 175+y, 280+x, 179+y);
  line(320+x, 179+y, 360+x, 175+y);
  stroke(190, 100, 100);
  strokeWeight(3);
  line(267+x, 175+y, 272+x, 176+y);
  line(277+x, 175+y, 272+x, 177+y);
  line(272+x, 177+y, 272+x, 181+y);


  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(265+x, 195+y, 25, 15);
  ellipse(335+x, 195+y, 25, 15);
  fill(0);
  ellipse(265 + x + mx, 195 + y + my, 8, 8); 
  ellipse(335 + x + mx, 195 + y + my, 8, 8);
  fill(255);
  ellipse(266 + x + mx, 194 + y + my, 3, 3);
  ellipse(336 + x + mx, 194 + y + my, 3, 3);

  noFill();
  stroke(0);
  strokeWeight(2);
  line(300+x, 205+y, 295+x, 230+y);
  line(295+x, 230+y, 305+x, 232+y);
  stroke(150, 50, 50);
  strokeWeight(3);
  bezier(275+x, 260+y, 290+x, 275+y, 310+x, 275+y, 325+x, 260+y);

  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(265+x, 195+y, 55, 46);
  ellipse(335+x, 195+y, 55, 46);
  line(292+x, 195+y, 307+x, 195+y);
  line(237+x, 195+y, 205+x, 195+y);
  line(363+x, 195+y, 395+x, 195+y);
}

function mousePressed() {
  bgR = random(255);
  bgG = random(255);
  bgB = random(255);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) x -= 10;
  else if (keyCode === RIGHT_ARROW) x += 10;
  else if (keyCode === UP_ARROW) y -= 10;
  else if (keyCode === DOWN_ARROW) y += 10;
  
  if (key === ' ') { 
    sR = random(255);
    sG = random(255);
    sB = random(255);
  }
  
  if (key === 's' || key === 'S') {
    saveGif('duhwan_assignment3', 3);
  }
}