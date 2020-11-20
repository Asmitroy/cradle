class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.02,
            length : 10,
            pointB : {x:offsetX, y:offsetY}
        }
        this.chain = constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}


