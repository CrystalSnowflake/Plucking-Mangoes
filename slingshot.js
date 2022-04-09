class Connect{
    constructor(a, b){
        var options = {
            bodyA: a,
            pointB: b,
            stiffness: 0.5,
            length: 2
        }

          //values
          this.bodyA = a;
          this.pointB = b;
        //making the connection
        this.sling = Constraint.create(options);
        World.add(world, this.sling)
    }

    fly(){
        this.bodyA = null;
    }

    display(){
        if(this.bodyA){
        var body = this.sling.bodyA.position;
        var pointB = this.pointB;

        stroke('black');
        strokeWeight(4)
        line(body.x, body.y, pointB.x, pointB.y)
        }
}
}
