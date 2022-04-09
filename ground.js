class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        // values
        this.w = 900;
        this.h = 100;

        //making the ground exist
        this.ground = Bodies.rectangle(0, 460, 800, 100, options);
        World.add(world, this.ground);
    }

    display(){
        var body = this.ground.position;
        
        fill("brown");
        rect(body.x, body.y, this.w, this.h);
    }
}