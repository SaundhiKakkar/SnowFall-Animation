const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var bg, bgImg , girl, girlImg , ground;
var snow , snowImg  ;

function preload() {
  bgImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow4.webp");
  girlImg = loadImage("Girl.png");
  boyImg = loadImage("Boy.png");
  music = loadSound("sound.wav");
}

function setup() {
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;

  music.play();

  bg = createSprite(900,370,1200,750);
  bg.scale = 1.1;
  bg.addImage(bgImg);

  girl = createSprite(300, 640, 50, 50);
  girl.addImage(girlImg);

  boy = createSprite(770, 640, 50, 50);
  boy.addImage(boyImg);

  ground = createSprite(600,750,1200,15);
  ground.visible = false;

  bg.x=bg.width/2;
}

function draw() {
  background(255);  
  Engine.update(engine);
  bg.velocityX = -2;

  if(bg.x<490){
    bg.x = bg.width/2; 
  }

  if(keyDown("space")&& girl.y >= 620){
    girl.velocityY = -14;
  }
  girl.velocityY = girl.velocityY - 0.6;
  girl.collide(ground);

  boy.velocityY = boy.velocityY + 0.6;
  boy.collide(ground);

  Snow();
  drawSprites();
}

function Snow() {
  if (frameCount % 10 === 0) {
    var snow = createSprite(80,0,40,10);
    snow.x = Math.round(random(0,1200));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY = 10;
    snow.lifetime = 250;
    snow.depth = girl.depth ;
    girl.depth = girl.depth + 1;
    snow.depth = boy.depth ;
    boy.depth = boy.depth + 1;

  }
}