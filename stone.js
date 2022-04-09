class Stones{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.7,
            friction: 1.0,
            density: 1.2
        }

        //loading the images
        this.image = loadImage("images/stone.png");

        //values
        this.x = x;
        this.y = y;
        this.r = r;
        //making the body exist
        this.stone = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.stone)
    }

    display(){
        var body = this.stone.position;

        image(this.image, body.x, body.y, this.r, this.r);
    }
}