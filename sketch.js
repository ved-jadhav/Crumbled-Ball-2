
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, bucket;
var ground, groundSprite, inv, isi, ble;

function preload(){
	dstBN = loadImage("Images/dustbingreen.png")
}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	inv = new INVS(520, 579, 10, 200);
	isi = new INVS(680, 579, 10, 200);
	ble = new INVS(600, 680, 170, 10);

	ground = new Ground(400, 690, 800, 20);

	ball = new Ball(100, 630, 70);

	bucket = createSprite(600, 580, 200, 200);
	bucket.addImage(dstBN);
	bucket.scale = 0.6;

	Engine.run(engine);


	
}

function draw() {
  //rectMode(CENTER);
  background(220);

  ball.display();
  ground.display();

  inv.display();
  isi.display();
  //ble.display();

  drawSprites();
} 

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:0.7 , y:-0.7})
	}
}



