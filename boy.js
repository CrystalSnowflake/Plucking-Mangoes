class Boy{
    constructor(x, y, r){
        var options = {
            isStatic: true,
            density: 2.0
        }

        //loading images
        this.person = loadImage("images/boy.png");

        //values
        this.r = r;
        //making the body exist
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body)
    }

    display(){
        var point = this.body.position;
        var a = 130;

        image(this.person, point.x, point.y, a, a)
    }
}