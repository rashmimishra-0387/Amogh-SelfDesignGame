var player

var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,
obstacle8,obstacle9,obstacle10,obstacle11;
var canMove = true;
var lastKeyPressed;
var finish

function setup() {
  createCanvas(400,400);

  
  player = createSprite(15,15,20,20);
  obstacle1 = createSprite(135, 15, 30,30);
  obstacle2 = createSprite(15, 165, 30,30);
  obstacle3 = createSprite(100, 130, 30,30);
  obstacle4 = createSprite(15, 375, 30,30);
  obstacle5 = createSprite(50, 375, 30,30);
  obstacle6 = createSprite(350, 15, 30,30);
  obstacle7 = createSprite(230, 100, 30,30);
  obstacle8 = createSprite(350, 300, 30,30);
  obstacle9 = createSprite(385, 330, 30,30);
  obstacle10 = createSprite(315, 375, 30,30);
  obstacle11 = createSprite(170, 200, 30,30);

 
  
  edges = createEdgeSprites(); 
  
  
}

function draw() {
  
  background(180);

    
    //jump when the space key is pressed
    if(keyDown(LEFT_ARROW) && canMove) {
        player.velocityX = -2;
        player.velocityY = 0;
        canMove = false
    }
    if(keyDown(RIGHT_ARROW) && canMove) {
      player.velocityX = 2;
      player.velocityY = 0;
      canMove = false
    }
    if(keyDown(UP_ARROW) && canMove) {
      player.velocityY = -2;
      player.velocityX = 0;
      canMove = false
    }
    if(keyDown(DOWN_ARROW) && canMove) {
      player.velocityY = 2;
      player.velocityX = 0;
      canMove = false
    }
    
    if(player.isTouching(edges[0]) || player.isTouching(edges[1]) 
    || player.isTouching(edges[2]) || player.isTouching(edges[3])){
      player.velocityX = 0;
      player.velocityY = 0
    }
    if(player.isTouching(obstacle1) || player.isTouching(obstacle2)
     || player.isTouching(obstacle3) || player.isTouching(obstacle4)
     || player.isTouching(obstacle5) || player.isTouching(obstacle6)
     || player.isTouching(obstacle7) || player.isTouching(obstacle8)
     || player.isTouching(obstacle9) || player.isTouching(obstacle10)
     || player.isTouching(obstacle11)){
      
      canMove= true
      player.velocityX = 0;
      player.velocityY = 0
      player.x -= 2
      player.y -= 2
    }
  

  drawSprites();
}



