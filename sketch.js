var  ground, groundimages;
var boy, boyimages;
var invisibleBoundary1,invisibleBoundary2;
var invisGroup;

function preload(){
  //pre-load images
groundimages=loadImage("path.png");
boyimages=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //groundAnimation
  ground = createSprite(200,200,200,400);
  ground.addAnimation("groundAnimation",groundimages);
  ground.velocityY= 8;

  //boyAnimation
  boy = createSprite(200,300,25,25);
  boy.addAnimation("BoyAnimation",boyimages);
  boy.scale=0.1;

  //invisible boundaries
  invisibleBoundary1 = createSprite(100,200,10,400);
  invisibleBoundary2 = createSprite(300,200,10,400);
  invisibleBoundary1.visible=false;
  invisibleBoundary2.visible=false;
  
  
    
}

function draw() {
  background(0);

  //infinite ground
  if(ground.y > 400){
    ground.y = height/2;
  }


  //boy colliding
  boy.collide(invisibleBoundary2);
  boy.collide(invisibleBoundary1); 

  //boy moving
  boy.x = World.mouseX;



  drawSprites();

}
