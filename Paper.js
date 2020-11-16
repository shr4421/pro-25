class Paper {

constructor(x,y,radius){

    var options={

        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    
    }
    this.radius=radius;
    this.x=x;
    this.y=y;
    this.image=loadImage("paper.png");
    this.body=Bodies.circle(x,y,radius/2-10,options);
    
    World.add(world,this.body);

}

display(){

     var Paperpos=this.body.position;

     push();
     translate(Paperpos.x,Paperpos.y);
     imageMode(CENTER);
     image(this.image,0,0,this.radius,this.radius);
     pop();

}



}