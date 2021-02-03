const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 

var engine,world,ground; 

var ball

function setup() { createCanvas(400,400); 
  engine=Engine.create(); 
  world=engine.world; 
  background("blue"); 
  var objectoptions={ isStatic:true } 
  ground=Bodies.rectangle(200,390,200,50,objectoptions); 
  World.add(world,ground);

var ballopt = {
restitution: 1.5
}

  ball = Bodies.circle(200,100,20,ballopt)
  World.add(world,ball);







}
  
  function draw() { 
    background("blue"); 
    Engine.update(engine); 
    rectMode(CENTER); 
    rect(ground.position.x,ground.position.y,400,40);
    ellipseMode(CENTER)
    ellipse(ball.position.x,ball.position.y,20,20)
     drawSprites(); }
