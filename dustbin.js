class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x, y, width, height,options);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        //this.image=loadImage(C-24-MAIN/dustbingreen.png);
        this.width = width;
        this.height = height;
    }
    display(){
       rectMode(CENTER);
       ImageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
       fill("green");
       rect(this.body.position.x,this.body.position.y,this.width,this.height); 
    }
}