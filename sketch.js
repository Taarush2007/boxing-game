var arena;
var player1;
var player2;
var score1 = 0;
var score2 = 0;
var boxer1_img1, boxer1_img2,boxer1_img3;
var boxer2_img1, boxer2_img2,boxer2_img3;
var gameState = 0;
var redwinner;
var belt,beltsprite;
var bluewinner;
var winner;


function preload(){

arena = loadImage("Pictures/boxing ring.jpg");
boxer1_img1 = loadImage("Pictures/redboxer.png");
boxer1_img2 = loadImage("Pictures/redleftbox2.png");
boxer1_img3 = loadImage("Pictures/boxredleft1.png");

boxer2_img1 = loadImage("Pictures/blueboxer2.png");
boxer2_img2 = loadImage("Pictures/bluboxer22.png");
boxer2_img3 = loadImage("Pictures/boblueright1.png");

belt = loadImage("Pictures/winnerbelt.png");
redwinner = loadImage("Pictures/redboxerwon.png");
bluewinner = loadImage("Pictures/blueboxerwon.png");



}



function setup() {
  createCanvas(windowWidth,windowHeight);
 player1 = createSprite(300, 350, 50, 50);
 player1.addImage(boxer1_img1);
 player1.scale = 0.6;
 player2 = createSprite(1000, 350, 50, 50);
 player2.scale = 0.6;
 player2.addImage(boxer2_img1);                   
 
 player1.shapeColor = "red";
 
  player2.shapeColor = "blue";

  beltsprite = createSprite(650,350,50,50);
  beltsprite.addImage(belt);
  beltsprite.scale = 0.5;
}

function draw() {
  background(arena);
  textSize (30)
  
  fill ("red")
  text("PLAYER 1:"+score1,100,50)

  fill ("BLUE")
  text("PLAYER 2:"+score2,1000,50)

  if(gameState === 0){
    fill("white")
    text("PRESS T TO START",500 ,100)
    if(keyDown ("t") ){
      gameState = 1;
    }
  }

if(gameState === 1){

beltsprite.y = 85;
beltsprite.scale = 0.3;

  player1.addImage(boxer1_img2);
  player1.scale = 0.4;
  player1.y = 400;
  player1.x = 600;
  player2.addImage(boxer2_img2);
  player2.scale = 0.6;
  player2.y = 400;
  player2.x = 700;

  gameState = 2;
}

if(gameState === 2 ){
 fill("red")
  text("PRESS K TO KICK",50,100);
  text("PRESS A&D TO MOVE", 50,150);
  fill("blue");
  text("PRESS H TO KICK",800,100);
  text("PRESS LEFT&RIGHT ARROW TO MOVE",800,150);

  if(keyWentDown("k")){
    player1.addImage(boxer1_img3);
    player1.scale = 0.3;
   
  }

  if(keyWentUp("k")){
    player1.addImage(boxer1_img2);

    player1.scale = 0.4;
   
  }


  if(keyWentDown("h")){
    player2.addImage(boxer2_img3);

    player2.scale = 0.4;
   
  }

  if(keyWentUp("h")){
    player2.addImage(boxer2_img2);
    player2.scale = 0.6;
   
  }



  if(keyDown(LEFT_ARROW)){
    player2.x = player2.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    player2.x = player2.x+2;
  }

  if(keyDown("a")){
    player1.x = player1.x-2;
  }

  if(keyDown("d")){
    player1.x = player1.x+2;
  }

  //player1.collide(player2)

if(player1.isTouching(player2) && keyDown("k")){
  score1++;
}

if(player2.isTouching(player1) && keyDown("h")){
  score2++;
}

if(score1 >= 200 && score2 < 200 ){
gameState = 3;
winner = "player1";
}

if(score2 >= 200 && score1 < 200 ){
  gameState = 3;
  winner = "player2";
  }

}

  drawSprites();
}