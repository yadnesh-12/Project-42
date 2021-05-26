class Drop{
    constructor(x,y){
        var options={
            friction:0.1,
        }
        this.body=Bodies.circle(x,y,10,options)
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("BLUE")
        ellipseMode(RADIUS);
        ellipse(this.body,pos.x,pos.y,10,10);

    }
}