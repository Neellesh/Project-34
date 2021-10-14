

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world ;

var ground ;
 
var bgImg  ;
var b1 , b2 , b3 , b4 , b5 , b6 , b7 , b8 , b9 , b10 ;
var b11 , b12 , b13 , b14 , b15 , b16 , b17 , b18 , b19 , b20 ;
var b21 , b22 , b23 , b24 , b25 , b26 , b27 , b28 , b29 , b30 ;
var b31 , b32 , b33 , b34 , b35 ;
var ball , con ;

function preload(){
 
 bgImg = loadImage("bg.jpg");

}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,550,1000,10);

  b1 = new Box (745,528,32,32);
  b2 = new Box (745,498,32,32);
  b3 = new Box (745,468,32,32);
  b4 = new Box (745,438,32,32);
  b5 = new Box (745,408,32,32);
  b6 = new Box (745,378,32,32);
  b7 = new Box (745,348,32,32);
  b8 = new Box (745,318,32,32);
  b9 = new Box (745,288,32,32);
  b10 = new Box (745,258,32,32);
  b11 = new Box (745,228,32,32);
  b12 = new Box (712,528,32,32);
  b13 = new Box (712,498,32,32);
  b14 = new Box (712,468,32,32);
  b15 = new Box (712,438,32,32);
  b16 = new Box (712,408,32,32);
  b17 = new Box (712,378,32,32);
  b18 = new Box (712,348,32,32);
  b19 = new Box (712,318,32,32);
  b20 = new Box (712,288,32,32);
  b21 = new Box (712,258,32,32);
  b22 = new Box (712,228,32,32);
  b23 = new Box (679,528,32,32);
  b24 = new Box (679,498,32,32);
  b25 = new Box (679,468,32,32);
  b26 = new Box (679,438,32,32);
  b27 = new Box (679,408,32,32);
  b28 = new Box (679,378,32,32);
  b29 = new Box (679,348,32,32);
  b30 = new Box (679,318,32,32);
  b31 = new Box (679,288,32,32);
  b32 = new Box (679,258,32,32);
  b33 = new Box (679,228,32,32);
  b34 = new Box (745,198,32,32);
  b35 = new Box (712,198,32,32); 
  b36 = new Box (679,198,32,32);
  b37 = new Box (745,168,32,32);
  b38 = new Box (712,168,32,32);
  b39 = new Box (679,168,32,32); 
 
  ball = Bodies.circle(250,300,20);
  World.add(world,ball);

  con = Constraint.create({
     pointA : {x:400,y:-65},
     bodyB : ball,
     pointB : {x:0,y:0},
     length : 375,
     stiffness : 0.1
  } );

  World.add(world,con)
}


function draw() 
{
  background(51);
  image(bgImg,0,0,width,height);

  Engine.update(engine);
  ellipseMode(RADIUS);

 
  ellipse(ball.position.x,ball.position.y,20)

  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  b6.show();
  b7.show();
  b8.show();
  b9.show();
  b10.show();
  b11.show();
  b12.show();
  b13.show();
  b14.show();
  b15.show();
  b16.show();
  b17.show();
  b18.show();
  b19.show();
  b20.show();
  b21.show();
  b22.show();
  b23.show();
  b24.show();
  b25.show();
  b26.show();
  b27.show();
  b28.show();
  b29.show();
  b30.show();
  b31.show();
  b32.show();
  b33.show();
  b35.show();
  b36.show();
  b34.show();
  b37.show();
  b38.show();
  b39.show();
 

  ground.show();
  
  textSize(20)
  if(b1.body.position.x  <  300){
    text("you won", 500 , 300)
}
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(ball,{x : 0 , y : 0},{x : 0.05 , y : -0.05})
  }
}



