class Star{
    constructor(x, y){
        var options = {
            isStatic: true
        }

        //loading the images
        this.image = loadImage("images/sun.jpg");

        //values
        this.r = 10;
        //making the bodies exist
        this.star = Bodies.circle(x, y, 10, options);
        World.add(world, this.star)
    }

    glow(){
        var body = this.star.position;
        var a = 100;

        image(this.image, body.x, body.y, a, a);
    }
}