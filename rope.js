class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           
        }
        pointB.x = this.offsetX;
        pointB.y = this.offsetY;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
            var bodyA = this.rope.bodyA.position;
           
            line(bodyA.x-22, bodyA.y, pointB.x, pointB.y);

           
        }
    }
    