var bg, sleep, brush, gym, bath, move, astro, eat;

function preload(){
  bg = loadImage("image/iss.png");
  sleep = loadAnimation("image/sleep.png");
  brush = loadAnimation("image/brush.png");
  gym = loadAnimation("image/gym1.png","image/gym1.png","image/gym11.png","image/gym12.png",);
  bath = loadAnimation("image/bath1.png","image/bath2.png",);
  move = loadAnimation("image/move.png", "image/move1.png");
  eat = loadAnimation("image/eat1.png", "image/eat2.png");
}






function setup() {
   createCanvas(600,500);
   astro = createSprite(300,230);
   astro.addAnimation("sleeping",sleep);
   astro.scale = 0.1;

}

function draw() {
  background(bg); 
  textSize(20);
  fill(255);
  text("instrucation", 20,35) ;
  textSize(15);
  text("upArrow = brushing ", 20,55);
  text("downArrow = gymming ", 20,70); 
  
  if(keyDown("UP_ARROW")){
    astro.addAnimation ("brushing", brush);
    astro.changeAnimation("brushing");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0; 
  }

  if(keyDown("DOWN_ARROW")){
    astro.addAnimation ("gymming", gym);
    astro.changeAnimation("gymming");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0; 
  }

  if(keyDown("LEFT_ARROW")){
    astro.addAnimation ("eating", eat);
    astro.changeAnimation("eating");
    astro.x = 150;
    astro.y = 350;
    astro.velocityX = 0.5;
    astro.velocityY = 0.5; 
  }

  if(keyDown("RIGHT_ARROW")){
    astro.addAnimation ("bathing", bath);
    astro.changeAnimation("bathing");
    astro.x = 300;
    astro.velocityX = 0;
    astro.velocityY = 0; 
  }

  if(keyDown("m key")){
    astro.addAnimation ("moveing", move);
    astro.changeAnimation("move");
    astro.y = 350;
    astro.x = 300;
    astro.velocityX = 0;
    astro.velocityY = 0; 
  }
  text("leftArrow = eating ", 20,85);
  text("rightArrow = bathing ", 20,100);
  text("m key = moveing ", 20, 115);
  
  edges = createEdgeSprites();
  astro.bounceOff(edges);

 
  drawSprites();
}