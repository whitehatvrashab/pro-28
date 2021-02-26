const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
var launcher

function preload() {
	
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 690);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper=new Paper(800,600,10);
 
 
 ground=new Ground(400,650,1200,10)

 
 dustbin1=new Dustbin(800,585,10,100);
 dustbin2=new Dustbin(855,640,100,10);
 dustbin3=new Dustbin(910,585,10,100);

 launcher =new Launcher(paper.body,{x:150,y:550});
}


function draw() {
 
  background(255);
  
  Engine.update(engine);

 
 paper.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
image(dustbinImg,785,500,140,150);
launcher.display();
 

}


function keyPressed() {
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
    }
}


function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}