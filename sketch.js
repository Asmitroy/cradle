
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var ground1
var sub1,sub2,sub3,sub4,sub5,sub6;
var bob1,bob2,bob3,bob4,bob5,bob6;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(600,20,1200,20);
	sub1=new Ground(100,20,200,20);
	sub2=new Ground(170,20,200,20);
	sub3=new Ground(240,20,200,20);
	sub4=new Ground(310,20,200,20);
	sub5=new Ground(380,20,200,20);
	sub6=new Ground(450,20,200,20);

	bob1 = new Bob(600,400,70,70);
	bob2 = new Bob(500,400,70,70);
	bob3 = new Bob(400,400,70,70);
	bob4 = new Bob(300,400,70,70);
	bob5 = new Bob(200,400,70,70);
	bob6 = new Bob(100,400,70,70);

	chain1= new Chain(bob1.body,sub1.body,0,450);
	chain2= new Chain(bob2.body,sub2.body,0,450);
	chain3= new Chain(bob3.body,sub3.body,0,450);
	chain4= new Chain(bob4.body,sub4.body,0,450);
	chain5= new Chain(bob5.body,sub5.body,0,450);
	chain6= new Chain(bob6.body,sub6.body,0,450);

	//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-250,y:0});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();

  sub1.display();
  sub2.display();
  sub3.display();
  sub4.display();
  sub5.display();
  sub6.display();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   //box1.display()
	   Matter.Body.applyForce(bob6.body,bob6.body.position,{x:1000,y:-500});
	 }
}


