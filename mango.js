 class Mango{
     constructor(x, y){
         var options = {
             isStatic: true,
             density: 1.0,
             restitution: 1.0,
             friction: 1.3
         }

         //loading the images
         this.fruit = loadImage("images/mango.png");

         //values
         this.r = 10;
         //making the bodies exist
         this.mango = Bodies.circle(x, y, this.r, options);
         World.add(world, this.mango);
     }

     grow(){
         var body = this.mango.position;
         var i  = 40;

         image(this.fruit, body.x, body.y, i, i)
     }
 }