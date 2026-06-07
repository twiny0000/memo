function setup() {
  createCanvas(600,400);
  

  background(220,205,210); 

  
  noStroke(); 
  fill(255,100,100); // 
  circle(150,150,270);

  
  fill(80,75,180,40);
  arc(300,50,80,80, radians (10), radians(350));
  
  
  stroke(50,55,130);
  strokeWeight(10);
  point(320,30);
  
  
  noStroke();
  fill(100,150,255,100);
  rect(350,80,200,250);

  
  fill(255,200,50,200);
  triangle(50,350,300,365,150,200);

 
  stroke(30); 
  strokeWeight(5); 
  line(0,100,700,300);
  line(450,0,250,400);

  
  noStroke();
  fill(150,41,200,180);
  quad(400,50,520,30,480,150,380,120);
  
 
  fill(50,200,150,200);
  ellipse(300,250,120,80);

  
  stroke(255,150,100);
  strokeWeight(8);
  noFill(); 
  circle(300,250,180);
  
}