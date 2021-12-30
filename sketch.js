// declaring a variable
var box;
// predefined function, runs once at the start of the code
function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,20,20);
  box.shapeColor = ("powderblue")
}

// a continous function runs for every frame
function draw() 
{
  background(30);

  if(keyIsDown(LEFT_ARROW)){
    box.position.x -= 4
  }

  if(keyIsDown(UP_ARROW)){
    box.position.y -= 4
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x += 4
  }

  if(keyIsDown(DOWN_ARROW)){
    box.position.y += 4
  }
  
  drawSprites();
}




