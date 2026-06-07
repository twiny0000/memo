let diam = 10;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 205, 210); 


  let wave1 = (sin(frameCount * 0.04) + 1) / 2;
  let wave2 = (cos(frameCount * 0.03) + 1) / 2;
  
  let sizeCircle = 270 + sin(frameCount * 0.05) * 30;
  
  let moveX = cos(millis() * 0.002) * 40;
  let moveY = sin(millis() * 0.002) * 20;

  let colorStart = color(255, 100, 100);
  let colorEnd = color(150, 41, 200);
  let changedColor = lerpColor(colorStart, colorEnd, wave1);
 
  noStroke(); 
  fill(changedColor); 
  circle(150, 150, sizeCircle); 


  fill(80, 75, 180, 40);
  arc(300 + moveX, 50 + moveY, 80, 80, radians(10), radians(350));
  

  stroke(50, 55, 130);
  strokeWeight(10);
  point(320, 30);
  

  noStroke();
  fill(100, 150, 255, 50 + wave2 * 100); 
  rect(350, 80, 200, 250);


  fill(255, 200, 50, 200);
  triangle(50, 350, 300, 365, 150, 200);


  stroke(30); 
  strokeWeight(5); 
  line(0, 100, 700, 300);
  line(450, 0, 250, 400);


  noStroke();
  fill(150, 41, 200, 180);
  quad(400 + moveX, 50, 520 + moveX, 30, 480 + moveX, 150, 380 + moveX, 120);
  

  fill(50, 200, 150, 200);
  ellipse(300, 250, 120, 80);

  stroke(255, 150, 100);
  strokeWeight(8);
  noFill(); 
  let ringSize = 180 + cos(frameCount * 0.05) * 25;
  circle(300, 250, ringSize);
}


function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('homework4_abstract_motion', 4);
  }
}