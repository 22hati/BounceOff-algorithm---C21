var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1 = createSprite(100,200,50,50); 
  o2 = createSprite(200,200,50,50); 
  o3 = createSprite(300,200,50,50); 
  o4 = createSprite(400,200,50,50); 
  o5 = createSprite(500,200,50,50);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bof(movingRect,fixedRect);

  movingRect.x = World.mouseX; movingRect.y = World.mouseY; 

  if(isTouching(o2,movingRect)) { 
    movingRect.shapeColor = "red"; 
    o2.shapeColor = "red"; 
  } else { 
    movingRect.shapeColor = "green"; 
    o2.shapeColor = "green"; 
  }
  
  drawSprites();
}

function bof(s1,s2) {
  if (s1.x - s2.x < s2.width/2 + s1.width/2
    && s2.x - s1.x < s2.width/2 + s1.width/2) {
    s1.velocityX = s1.velocityX * (-1);
    s2.velocityX = s2.velocityX * (-1);
  }

  if (s1.y - s2.y < s2.height/2 + s1.height/2
    && s2.y - s1.y < s2.height/2 + s1.height/2){
    s1.velocityY = s1.velocityY * (-1);
    s2.velocityY = s2.velocityY * (-1);
  }
}