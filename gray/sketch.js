
let x, y;

function setup() {
  createCanvas(720, 400);

  x = width / 2;
  y = height;
}

function draw() {
  background(200,1);
  
 
  noStroke();
  fill(0);
  ellipse(x, y, 50, 50);
  

  x = x + random(-5, 5);
 
  y = y -1;
  

  if (y < 0) {
    y = height;
  }
}
