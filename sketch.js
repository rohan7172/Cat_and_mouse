var cat, catRunning, catSit, catDown;
var mouseTease, mouseStand;
var bg, bgImg;

function preload() {
    catRunning=loadAnimation("cat2.png","cat3.png");
    catSit=loadAnimation("cat4.png");
    catDown=loadImage("cat1.png");

    mouseTease=loadAnimation("mouse1.png","mouse2.png","mouse3.png")
    mouseStand=loadAnimation("mouse4.png");

    bgImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    bg=createSprite(500,400,1000,800);
    bg.addImage(bgImg);

    cat=createSprite(800,650,20,20);
    cat.addImage(catDown);
    cat.addAnimation("running",catRunning);
    cat.addAnimation("sit",catSit);
    cat.setCollider("rectangle",0,0,1000,1000);
    cat.scale=0.2;

    mouse=createSprite(200,650,20,20);
    mouse.addAnimation("teasing",mouseTease);
    mouse.addAnimation("standing",mouseStand);
    mouse.setCollider("rectangle",0,0,1000,1000);
    mouse.scale=0.2;
}

function draw() {

    background(255);

    if(keyWentDown("LEFT_ARROW")){
        cat.velocityX=-2;
        cat.changeAnimation("running",catRunning);
    }
    if(cat.isTouching(mouse)){
        cat.velocityX=0;
        cat.changeAnimation("sit",catSit);
        mouse.changeAnimation("standing",mouseStand);
    }

    drawSprites();
}


function keyPressed(){


}
