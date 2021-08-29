var sea, seaImg;
var ship, ship_img, 

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-1.png");
  shipImg2 = loadAnimation("ship-3.png","ship-4.png","ship-3.png","ship-3.png");
}



function setup()
{
  createCanvas(400,400);
   
  sea = createSprite(0,250,50,50);
  sea.addImage("sea moving", seaImg);
  sea.velocityX = "-2";
  sea.scale=0.5;

  ship = createSprite(200,290,6,6);
  ship = addAnimation("ship moving", ship_img);

}



function draw() 
{
  background("blue");
  
  if(sea.x < 0){
    sea.x = sea.width/4;
  }

  drawSprites();

}

