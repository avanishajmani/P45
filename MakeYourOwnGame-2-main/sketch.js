var rocket
var score
var timer
var PLAY = 1
var END = 0
var gameState = PLAY


function preload() {
  rocketImage = loadImage("Rocket.png")
  coolImage = loadImage("CoolRocket.png")
  asteroids = loadImage("Debris.png")
  replayImage = loadImage("Replay.png")
  backgoundImage = loadImage("space.gif")
  backSound = loadSound("back.mp3")
  sfxSound = loadSound("effect.wav")
}

function setup() {
  createCanvas(600,500);


  rocket = createSprite(100, 450, 50, 50);
  rocket.addImage(rocketImage)
  rocket.scale = 0.15

  timer = createSprite(300,450,5,400)
  timer.shapeColor = "white"
  timer.velocityY = 0.2
//  timer.velocityY = 3

  blocker = createSprite(300,920,500,50)

  replay = createSprite(300,350,50,50)
  replay.addImage(replayImage)
  replay.scale = 0.5
  replay.visible = false

  
  

  ballGroup = new Group() 

  rocket.setCollider("rectangle",0,0,200,500);
//  rocket.debug = true;

  score = 0
  


}

function draw() {
  background(backgoundImage);  

  textSize(60)
  fill("white")
  stroke("white")
  text(score, 30,480);

  if(gameState === PLAY) {

    backSound.play;

    if(keyDown(UP_ARROW)) {
      rocket.y = rocket.y - 10
    }
  
    else if(keyDown(DOWN_ARROW)) {
      rocket.y = rocket.y + 10
    }

    if(ballGroup.isTouching(rocket)) {
      rocket.y = 450
      sfxSound.play;
    }
  
    if(rocket.y === 50) {
      score = score + 1
      rocket.y = 450
    }
  
    if(timer.isTouching(blocker)) {
      gameState = END
    }
  
}

   
  else if(gameState === END) {
    gameEnd()
  }


  

  
  

  


//   }
//  }



  spawn2()



  drawSprites();
}


function Spawn() {

  if (frameCount % 60 === 0) {
    var leftBall1 = createSprite(620,120,15,15);
    leftBall1.y = Math.round(random(50,420));
    leftBall1.x = Math.round(random(605,640));
    leftBall1.velocityX = -4;
    ballGroup.add(leftBall1)

    var leftBall2 = createSprite(640,120,15,15);
    leftBall2.y = Math.round(random(50,420));
    leftBall2.x = Math.round(random(605,640));
    leftBall2.velocityX = -4;
    ballGroup.add(leftBall2)

    var leftBall3 = createSprite(640,120,15,15);
    leftBall3.y = Math.round(random(50,420));
    leftBall3.x = Math.round(random(605,640));
    leftBall3.velocityX = -4;
    ballGroup.add(leftBall3)

    var rightBall1 = createSprite(-10,120,15,15);
    rightBall1.y = Math.round(random(50,420));
    rightBall1.x = Math.round(random(-5,-40));
    rightBall1.velocityX = 4;
    ballGroup.add(rightBall1)

    var rightBall2 = createSprite(-30,120,15,15);
    rightBall2.y = Math.round(random(50,420));
    rightBall2.x = Math.round(random(-5,-40));
    rightBall2.velocityX = 4;
    ballGroup.add(rightBall2)

    var rightBall3 = createSprite(-30,120,15,15);
    rightBall3.y = Math.round(random(50,420));
    rightBall3.x = Math.round(random(-5,-40));
    rightBall3.velocityX = 4;
    ballGroup.add(rightBall3)
  
  }
}


function spawn() {
  if (frameCount % 60 === 0) {
    var leftBall1 = createSprite(620,120,15,15);
    leftBall1.y = Math.round(random(50,420));
    leftBall1.x = Math.round(random(605,640));
    leftBall1.velocityX = -4;
    ballGroup.add(leftBall1)

    var rightBall1 = createSprite(-10,120,15,15);
    rightBall1.y = Math.round(random(50,420));
    rightBall1.x = Math.round(random(-5,-40));
    rightBall1.velocityX = 4;
    ballGroup.add(rightBall1)
  }

  if(frameCount % 20 === 0){
    var leftBall2 = createSprite(640,120,15,15);
    leftBall2.y = Math.round(random(50,420));
    leftBall2.x = Math.round(random(605,640));
    leftBall2.velocityX = -4;
    ballGroup.add(leftBall2)

    var rightBall2 = createSprite(-30,120,15,15);
    rightBall2.y = Math.round(random(50,420));
    rightBall2.x = Math.round(random(-5,-40));
    rightBall2.velocityX = 4;
    ballGroup.add(rightBall2)
  }

  if(frameCount % 40 === 0){
    var leftBall3 = createSprite(640,120,15,15);
    leftBall3.y = Math.round(random(50,420));
    leftBall3.x = Math.round(random(605,640));
    leftBall3.velocityX = -4;
    ballGroup.add(leftBall3)
    
    var rightBall3 = createSprite(-30,120,15,15);
    rightBall3.y = Math.round(random(50,420));
    rightBall3.x = Math.round(random(-5,-40));
    rightBall3.velocityX = 4;
    ballGroup.add(rightBall3)
  }

}


function spawn2() {
  if (frameCount % 60 === 0) {
    var leftBall1 = createSprite(620,120,15,15);
    leftBall1.shapeColor = "white"
    leftBall1.addImage(asteroids)
    leftBall1.scale = 0.03
    leftBall1.y = Math.round(random(50,420));
    leftBall1.x = Math.round(random(605,640));
    leftBall1.velocityX = -4;
    ballGroup.add(leftBall1)
  
    var rightBall1 = createSprite(-10,120,15,15);
    rightBall1.shapeColor = "white"
    rightBall1.addImage(asteroids)
    rightBall1.scale = 0.03
    rightBall1.y = Math.round(random(50,420));
    rightBall1.x = Math.round(random(-5,-40));
    rightBall1.velocityX = 4;
    ballGroup.add(rightBall1)
  }
  
  if(frameCount % 20 === 0){
    var leftBall2 = createSprite(640,120,15,15);
    leftBall2.shapeColor = "white"
    leftBall2.addImage(asteroids)
    leftBall2.scale = 0.03
    leftBall2.y = Math.round(random(50,420));
    leftBall2.x = Math.round(random(605,640));
    leftBall2.velocityX = -4;
    ballGroup.add(leftBall2)
  
    var rightBall2 = createSprite(-30,120,15,15);
    rightBall2.shapeColor = "white"
    rightBall2.addImage(asteroids)
    rightBall2.scale = 0.03
    rightBall2.y = Math.round(random(50,420));
    rightBall2.x = Math.round(random(-5,-40));
    rightBall2.velocityX = 4;
    ballGroup.add(rightBall2)
  }
} 


function gameEnd() {
    background("black")
    textSize(60)
    fill("white")
    stroke("white")
    text("Game Over",140,200)
    
    textSize(20)
    text("Great Job! You escaped the planet "+ score + " times!",110,250)

    rocket.y = 450

//    leftBall1.visible = false
//    rightBall1.visible = false
//    leftBall2.visible = false
//    rightBall2.visible = false

    replay.visible = true

  
    if(keyDown(UP_ARROW)) {
      rocket.y = rocket.y - 0
    }
  
    else if(keyDown(DOWN_ARROW)) {
      rocket.y = rocket.y + 0
    }  

    if(mousePressedOver(replay)) {
      reset();
}
    
}


function reset(){
  background("black")
  gameState = PLAY;
  replay.visible = false
  
  ballGroup.destroyEach();

  timer.y = 450
  

  
  score = 0;
  
}
