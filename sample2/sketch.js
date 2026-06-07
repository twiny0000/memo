function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(180, 210, 255);

  noStroke();
  fill(230, 200, 190);
  rect(275, 250, 50, 150);

  fill(80, 100, 180);
  arc(300, 440, 430, 200, PI, TWO_PI);
  fill(230, 200, 190);
  arc(300, 340, 75, 40, 0, PI);


  fill(230, 200, 190);
  ellipse(205, 215, 30, 45);
  ellipse(395, 215, 30, 45); 

  ellipse(300, 210, 190, 220);

  fill(35); 
  beginShape();
  for (let a = PI; a <= TWO_PI; a += 0.05) {
    let x = 300 + cos(a) * 105;
    let y = 175 + sin(a) * 90;
    vertex(x, y);
  }
  vertex(405, 175);
  vertex(315, 175);
  vertex(300, 150);
  vertex(285, 175);
  vertex(195, 175);
  endShape(CLOSE);

  quad(195, 175, 210, 175, 210, 220, 200, 210);
  quad(390, 175, 405, 175, 400, 210, 390, 220);
  
  stroke(43); 
  strokeWeight(2); 
  noFill(); 
  bezier(280, 95, 250, 120, 260, 140, 240, 155);
  bezier(295, 93, 280, 130, 280, 150, 265, 160);
  bezier(305, 90, 300, 120, 310, 130, 300, 140);
  bezier(320, 93, 330, 120, 340, 140, 335, 160);
  bezier(330,95, 350, 120, 355, 140, 360, 155);

  stroke(35);
  strokeWeight(4);
  line(240, 175, 280, 179);
  line(320, 179, 360, 175);

  stroke(190, 100, 100);
  strokeWeight(3);
  line(267, 175, 272, 176);
  line(277, 175, 272, 177);
  line(272, 177, 272, 181);

  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(265, 195, 25, 15);
  ellipse(335, 195, 25, 15);
  fill(0);
  ellipse(265, 195, 8, 8);
  ellipse(335, 195, 8, 8);
  fill(255);
  ellipse(266, 194 , 3, 3);
  ellipse(336, 194 , 3, 3);

  noFill();
  strokeWeight(2);
  line(300, 205, 295, 230);
  line(295, 230, 305, 232);

  stroke(150, 50, 50);
  strokeWeight(3);
  bezier(275, 260, 290, 275, 310, 275, 325, 260);

  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(265, 195, 55, 46);
  ellipse(335, 195, 55, 46);
  line(292, 195, 307, 195);
  line(237, 195, 205, 195);
  line(363, 195, 395, 195);
}