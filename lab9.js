let bubbles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 50);
    bubbles.push(new Bubble(x, y, r));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = ["red", "blue", "green"];
    this.xSpeed = random(-10, 10);
    this.ySpeed = random(-10, 10);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    fill(random(this.c));
    ellipse(0, 0, 50);
    pop();
  }
}
