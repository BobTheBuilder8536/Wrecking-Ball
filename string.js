class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 500
        }

        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    // attach(body){
    //     this.sling.bodyA = body;
    // }
    
    // fly(){
    //     this.sling.bodyA = null;
    // }

    display(){


            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255,255,255);
            strokeWeight(5);

            line(pointA.x,pointA.y,pointB.x,pointB.y)
            
            pop();
        
}
    
}