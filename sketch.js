//car speed test
//when damage < 100 color is green; 
//when damage < 200 color is yellow;
//when damage < 300 color is red;


var car,  wall;
var speed, damege;

function setup() {
  createCanvas(800,400);
  car = createSprite(200,200,30,30);
  wall = createSprite(600, 200, 10,200);
  wall.shapeColor = "brown";
  car.shapeColor = "black";
  speed = random(2,20);  
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if(car.x-wall.x < wall.width/2+car.width/2 &&
    wall.x-car.x < wall.width/2+car.width/2 && 
    car.y-wall.y < wall.width/2+car.height/2 &&
    wall.y-car.y < wall.width/2+car.height/2){
car.velocityX = 0;
damage = speed*20;

if(damage <= 150){
car.shapeColor = "green";
}
if(damage <= 300 && damage > 150){
  car.shapeColor = "yellow";
  }
  if(damage <= 400 && damage > 300){
    car.shapeColor = "red";
    }
      
}
  drawSprites();
}