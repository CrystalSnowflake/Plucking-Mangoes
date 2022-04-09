class Tree{
    constructor(x, y){
        var options = {
            isStatic: true
        }

        //loading the images
        this.image = loadImage("images/tree.png");

        //values
        this.w = 10;
        this.h = 10;
        //making the tree exist
        this.tree = Bodies.rectangle(x, y, this.w, this.h, options);
        World.add(world, this.tree);
    }

    plant(){
        var body = this.tree.position;
        var b =450;
       
        image(this.image, body.x, body.y, b, b);
    
    }
}