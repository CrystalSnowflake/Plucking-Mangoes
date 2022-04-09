class Cloud{
    constructor(x,y){
        var options = {
            isStatic: true
        }

        //loading the images
        this.image = loadImage("images/cloud.png");

        //values
        this.r = 10;
        //making the bodies exist
        this.cloud = Bodies.circle(x, y, this.r, options);
        World.add(world, this.cloud);
    }

    fly(){
        var body = this.cloud.position;
        var a = 70;

        image(this.image, body.x, body.y, a, a);
    }
}