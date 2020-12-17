var moving, fixed

function setup() {
  createCanvas(800,400);
 moving = createSprite(400, 200, 80, 50);
 fixed  = createSprite(200,200,50,30);
 moving.shapeColor="orange";
 fixed.shapeColor="lightblue";
 fixed.velocityX=4;
 moving.velocityX=-4;
}

function draw() {
  background("black");
//moving.x=mouseX;
//moving.y=mouseY;
if (moving.x-fixed.x<moving.width/2+fixed.width/2
  &&fixed.x-moving.x<fixed.width/2+moving.width/2
  &&moving.y-fixed.y<moving.height/2+fixed.height/2
  &&fixed.y-moving.y<fixed.height/2+moving.height/2){
    moving.shapeColor="magenta";
    fixed.shapeColor="magenta";
  }
else{
  moving.shapeColor="orange";
 fixed.shapeColor="lightblue"; 
}
if (moving.x-fixed.x<moving.width/2+fixed.width/2
  &&fixed.x-moving.x<fixed.width/2+moving.width/2){
    moving.velocityX=moving.velocityX*(-1);
    fixed.velocityX=fixed.velocityX*(-1);
  }
  if (moving.y-fixed.y<moving.height/2+fixed.height/2
  &&fixed.y-moving.y<fixed.height/2+moving.height/2){
    moving.velocityY=moving.velocityY*(-1);
    fixed.velocityY=fixed.velocityY*(-1);  
  }
  drawSprites();
}