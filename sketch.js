var starImg,bgImg;
var fairy, fairyBody, fairyImg;
var fairyVoice;
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
	fairyImg = loadAnimation('images/fairyImage1.png','images/fairyImage2.png');
	fairyVoice = loadSound('sound/JoyMusic.mp3');
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	fairy = createSprite(100,570);
	fairy.addAnimation('fairyFly', fairyImg);
	fairy.scale = 0.2;
	fairyVoice.play();


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

  if(star.y > 535 && starBody.position.y > 535){
	Matter.Body.setStatic(starBody,true); 
  }

  if(keyDown(RIGHT_ARROW)){
	fairy.x = fairy.x +7;
  }
 
  if(keyDown(LEFT_ARROW)){
	fairy.x = fairy.x -7;
  }
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
