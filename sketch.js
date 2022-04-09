const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, tree1, human, pebble, sunStar, slingShot;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var cloud1, cloud2, cloud3, cloud4;

function preload(){}

function setup(){
	createCanvas(900, 560)
	
	//making the world
	engine = Engine.create();
	world = engine.world;

	//making the bodies
	ground = new Ground();
	tree1 = new Tree(450, 100);
	human = new Boy(40, 380, 10, 30);
	pebble = new Stones(240, 430, 40);

	//fruits
   mango1 = new Mango(490, 270)  // left most
   mango2 = new Mango(560, 250) // to the right of mango1 and a little up
   mango3 = new Mango(600, 285) // to the bottom right of mango2
   mango4 = new Mango(680, 210) // below mango5
   mango5 = new Mango(720, 130) // the top-most
   mango6 = new Mango(850, 245) // the right-most
   mango7 = new Mango(740, 265) // to the bottom-right of mango4

   //background 'accessories'
    //clouds
   cloud1 = new Cloud(80, 65)
   cloud2 = new Cloud(330,120);
   cloud3 = new Cloud(180, 190);
   cloud4 = new Cloud(620, 20);
   //sun
   sunStar = new Star(390, 40)

   // ***THE SLINGSHOT*** //
   slingShot = new Connect(human.body, {x: 240, y: 430})
}

function draw(){
	background(rgb(138, 255, 252))
	Engine.run(engine)
	

	//displaying the bodies
	ground.display();
	tree1.plant(); // tree is black
	human.display();
	pebble.display();

	//mangoes
	mango1.grow();
	mango2.grow();
	mango3.grow();
	mango4.grow();
	mango5.grow();
	mango6.grow();
	mango7.grow(); 

	//clouds
	cloud1.fly();
	cloud2.fly();
	cloud3.fly();
	cloud4.fly();
	
	//sun
	sunStar.glow();

	//slingshot
	slingShot.display();


	drawSprites();
}

function mouseDragged(){
	Body.setPosition(this.pebble, {x: mouseX, y: mouseY});
}