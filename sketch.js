var movingrect; 
var fixedrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(400, 300, 80, 50);
}

function draw() {
  background(0,0,0);
  movingrect.x = World.mouseX  
  movingrect.y = World.mouseY  
  if (movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2  &&  
      fixedrect.x - movingrect.x <= fixedrect.width/2 + movingrect.width/2  && 
      fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2  &&
      movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2) {
movingrect.shapeColor = "orange"
fixedrect.shapeColor = "orange"
  }
  else {
    movingrect.shapeColor = "yellow"
    fixedrect.shapeColor = "yellow"

  }
  drawSprites();
}