var gun,gunan;
var target,targetImg;
var bul


function setup() {
    createCanvas(1500, 750);

    gun = createSprite(100,600,30,40)

    target = createSprite(500,300,50,70)

  }
  
  function draw() {
    background("green");
    if(keyDown("left")){
        gun.x = gun.x-20
    }
    if(keyDown("right")){
        gun.x = gun.x+20
    }
    if(keyDown("space")){
        bul = createSprite(100,600,5,10)
        bul.x = gun.x    
        bul.velocityY = -10
    }
   
    drawSprites();
  }