var balloon;

function preload(){
background = loadImage("Hot Air Ballon-01.png");
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);

  balloon = createSprite(200,200,30,30);
  balloon.addAnimation();
}

function draw() {
  background("Hot Air Ballon-01.png");  
  drawSprites();
}
if(keyDown(LEFT_ARROW)){
balloon.x = balloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
balloon.x = balloon.x +10
}
else if(keyDown(UP_ARROW)){
balloon.y = balloon.y -10
}
else if(keyDown(DOWN_ARROW)){
balloon.y = balloon.y +10
}