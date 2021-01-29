var balloon;
var database;

function preload(){
background = loadImage("pro-C35 images/Hot Air Ballon-01.png");
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);

  balloon = createSprite(200,200,30,30);
  balloon.addAnimation();
  database = firebase.database();
}

function draw() {
  background = ("pro-C35 images/Hot Air Ballon-01.png");  
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
