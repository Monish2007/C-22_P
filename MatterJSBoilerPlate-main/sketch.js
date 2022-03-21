var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	var ball_options = {

		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	ball = Bodies.circle(200,500,30,ball_options);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
ellipse(ball.position.x,ball.position.y,radius,radius);

}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:85, y:-85});

	}


}
