var w;
var timer = 0;
var timeOut = 1000;
var r, g, b;

function setup()
{
  createCanvas(640, 360);
  
  w = new Walker();
}

function draw()
{
  background(51);
  
  w.update();
  w.display();
}

function Walker()
{
  this.pos = createVector(width/2, height/2);
  
  this.update = function()
  {
    var vel = createVector(random(-5, 5), random(-5, 5));
    
    this.pos.add(vel);
  }
  
  this.display = function()
  {
    if(millis() > timer + timeOut)
      {
        r = random(255);
        g = random(255);
        b = random(255);
        
        timer = millis();
      }
    
    fill(r, g, b);
    
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
