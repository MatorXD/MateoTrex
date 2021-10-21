var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;



function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
  cloudImage=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  edges=createEdgeSprites();
  ground=createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.velocityX=-2;
  invisibleGround=createSprite(200,190,400,10);
  invisibleGround.visible=false;
}

function draw() {
  background(180);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&&trex.y>=130){
    trex.velocityY=-10;
  
  }
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(invisibleGround);
  drawSprites();
  spawnClouds();
  spawnObstacles();
  
}
function spawnObstacles(){
  if(frameCount%60===0){
    var obstacle=createSprite(400,165,10,40);
    obstacle.velocityX=-6;
    //generar obstaculos aeatorios switch case
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage(obstacle1);
      break;
      case 2:obstacle.addImage(obstacle2);
      break;
      case 3:obstacle.addImage(obstacle3);
      break;
      case 4:obstacle.addImage(obstacle4);
      break;
      case 5:obstacle.addImage(obstacle5);
      break;
      case 6:obstacle.addImage(obstacle6);
      break;
      default:break;
    }
    obstacle.scale=0.5;
    obstacle.lifetime=200;
  }
}


function spawnClouds(){
  if(frameCount%60===0){
   cloud=createSprite(600,100,40,10);
   cloud.velocityX=-3;
   cloud.addImage(cloudImage);
   //nubes con altura aleatoria
   cloud.y=Math.round(random(10,60));
   //tiempo de vida de las nubes
   cloud.lifetime=200;
   //ajustando profundidad del T-rex con las nubes
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
  }
  

}

