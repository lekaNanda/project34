class rope{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250,
        }
        
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        this.body = superHero;
        Worldd.add(world, this.rope);
    }
    atach(body){
        this.rope.bodyA = body;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8);
            strokeWeight(3);
            line(pointB.x, point.y, point.x, point.y);
            pop();
        }
    }
}