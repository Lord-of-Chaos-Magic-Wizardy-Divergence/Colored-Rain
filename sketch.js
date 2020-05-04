var drops = [];
var rainbow;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  
  rainbow = createSprite(200,200);
  
  rainbow.visible = false;
}

function draw() {
  background("cyan");
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();    
  }
  
  ellipseMode(CENTER);
  fill("yellow");
  noStroke();
  ellipse(580,60,50);  
  
  if(rainbow.visible === true){
    //drops.delay(this.yspeed);
  }

  drawSprites();
}

function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(50,150,250);
    line(this.x, this.y, this.x, this.y + this.len);
  };
}