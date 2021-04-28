var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	for (var i = 50; i < 800; i = i+50)
	{
	 var pumpkin = createSprite(i, 50, 20, 20);
	}
	
	for (var x = 50; x < 800; x = x+50)
	{
	var apples = createSprite(x, 100, 20, 20);
	}

	for (var x = 50; x < 800; x = x+50)
	{
	var rasBerry = createSprite(x, 150, 20, 20);
	}

 for (var x = 50; x < 800; x = x+50)
{
var blackBerry = createSprite(x, 200, 20, 20);
}

for (var x = 50; x < 800; x = x+50)
{
var yeet = createSprite(x, 250, 20, 20);
}

for (var x = 50; x < 800; x = x+50)
{
var yeet1 = createSprite(x, 300, 20, 20);
}

for (var x = 50; x < 800; x = x+100)
{
var Berry = createSprite(x, 600, 10, 400);
}

var line = createSprite(400,750,800,10)
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
