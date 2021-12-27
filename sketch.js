
function preload(){
  //pre-load images
  path.preload("path.png");
  runner1.preload("runner1.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  if(path.y > 400){
    path.y = height/2;
  }
  runner1 = createSprite(30,30);
  runner1.addImage(runner1Img);
  runner1.setAnimation();
}

function draw() {
  background(0);

}
