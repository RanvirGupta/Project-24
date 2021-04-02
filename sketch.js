var paper,ground;
var dustbin,dustbinIMG;
var left, right, bottom;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(1500,400);
	

	engine = Engine.create();
	world = engine.world;
    var options = {
	isStatic: true
}
	ground = Bodies.rectangle(750, 390,2000,20, options);
	World.add(world, ground);

	paper = new Paper(200,353,25);
	

	dustbinSideB = new Dustbin(1150,373,200,15);
	dustbinSideL = new Dustbin(1050,306,15,150);
	dustbinSideR = new Dustbin(1250,306,15,150);


	Engine.run(engine);
  
}


function draw() {
   background(0);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y , 1500,20);
  paper.display();
  ground.display();
  dustbinSideB.display()
  dustbinSideL.display()
  dustbinSideR.display()
  
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

