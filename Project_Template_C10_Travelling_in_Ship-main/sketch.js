var seaImg,sea1;
var ship1,shipImg;

function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-3.png","ship-2.png","ship-4.png");
}

function setup(){
 
  createCanvas(400,400);
  background("blue");
  
  sea1=createSprite(400,200);
  sea1.addImage(seaImg);
  sea1.velocityX=-5;
  sea1.scale=0.3;

  ship1=createSprite(130,200,30,30);
  ship1.addAnimation("movingShip",shipImg);
  ship1.scale=0.25;

}

function draw() {
 background(0);
 sea1.velocityX=-3;
if(sea1.x<0){
  sea1.x=sea1.width/8;
}


 drawSprites();

 
}