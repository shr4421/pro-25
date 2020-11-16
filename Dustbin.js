class Dustbin {

    constructor(x,y){

        this.x=x;
        this.y=y;
        this.width=200;
        this.height=150;
        this.thickness=20;
        this.angle=0;

     var option ={
     isStatic:true
     }
       
     this.image=loadImage("bin.png");
        this.bottombody=Bodies.rectangle(this.x,this.y,200,10,option);
        
        World.add(world,this.bottombody);
    }

    display(){

        
        var pos3=this.bottombody.position;

        push();
        translate(pos3.x,pos3.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
      
    }
}