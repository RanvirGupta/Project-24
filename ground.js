class Ground{
    constructor(x, y, r){
        var options = {
            restitution: 0.6,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Bodies.rectancle(x, y, r ,options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop();
        fill("yellow");
    }
}