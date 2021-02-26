class Paper{
 constructor(x,y,radius){
  var options={
    //isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
    
  }
  this.body=Bodies.circle(x,y,radius,options)
  this.radius=radius;
  this.image = loadImage("paper.png")

  World.add(world,this.body);
 }

 display(){
    
     push();
    var pos =this.body.position;
    translate(this.body.position.x, this.body.position.y);
 fill("pink");

 //ellipseMode(RADIUS);
 //ellipse(0,0,10,10);
 imageMode(CENTER);
 image(this.image,0,0,40,40)
pop();
 }
 

}

 