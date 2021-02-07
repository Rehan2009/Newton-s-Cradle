
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   roof1 = new Roof(400,200);
   bob1 = new Bob(312,400);
   rope1 = new Rope(bob1,roof1,312,218);
   bob2 = new Bob(356,400);
   rope2 = new Rope(bob2,roof1,356,218);
   bob3 = new Bob(400,400);
   rope3 = new Rope(bob3,roof1,400,218);
   bob4 = new Bob(444,400);
   rope4 = new Rope(bob4,roof1,444,218);
   bob5 = new Bob(488,400);
   rope5 = new Rope(bob5,roof1,488,218);

   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
   bob1.display();
   rope1.display();
   bob2.display();
   rope2.display();
   bob3.display();
   rope3.display();
   bob4.display();
   rope4.display();;
   bob5.display();
   rope5.display();

  
  drawSprites();
 
}



