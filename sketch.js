var thief, police, police1, police2, police3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var blockGroup, policeGroup;
var chest;
var edges;
var lives = 3;
function preload(){
police_running = loadAnimation("Spritesheets/P1.png","Spritesheets/P2.png","Spritesheets/P3.png","Spritesheets/P4.png","Spritesheets/P5.png","Spritesheets/P6.png")
robber_running = loadAnimation("Spritesheets/R1.png","Spritesheets/R2.png","Spritesheets/R3.png", "Spritesheets/R4.png");
chest_image = loadImage("chest.png");
cell_img = loadImage("Cellimg.jpeg");
}

function setup(){
    createCanvas(800,800);

    block1 = createSprite(150,770,30,80);
    block2 = createSprite(125,720,80,30);
    block3 = createSprite(100,680,30,80);
    block4 = createSprite(100,520,30,80);
    block5 = createSprite(50,495,80,30);
    block6 = createSprite(300,650,30,400);
    block7 = createSprite(205,350,420,30);
    block8 = createSprite(600,650,30,900);
    block9 = createSprite(430,535,30,400);
    block10 = createSprite(460,215,250,30);
    block11 = createSprite(120,215,250,30);
    block12 = createSprite(250,110,500,30);
    block13 = createSprite(700,110,200,30);
    block14 = createSprite(700,420,30,700);

    thief = createSprite(50,760,20,20);
    thief.addAnimation('robber_running', robber_running);
    thief.scale = 0.6;

    police = createSprite(50,410,20,20);
    police.addAnimation('police_running', police_running);
    police.scale = 0.06;

    police1 = createSprite(330,770,20,20);
    police1.addAnimation('police_running', police_running);
    police1.scale = 0.05;

    police2 = createSprite(350,320,20,20);
    police2.addAnimation('police_running', police_running);
    police2.scale = 0.07;
    
    police3 = createSprite(675,50,20,20);
    police3.addAnimation('police_running', police_running);
    police3.scale = 0.07;

    chest = createSprite(767,50,10,10);
    chest.addImage('chest_image', chest_image);
    chest.scale = 0.4;


    blockGroup = new Group();
    blockGroup.add(block1);
    blockGroup.add(block2);
    blockGroup.add(block3);
    blockGroup.add(block4);
    blockGroup.add(block5);
    blockGroup.add(block6);
    blockGroup.add(block7);
    blockGroup.add(block8);
    blockGroup.add(block9);
    blockGroup.add(block10);
    blockGroup.add(block11);
    blockGroup.add(block12);
    blockGroup.add(block13);
    blockGroup.add(block14);

    policeGroup = new Group();
    policeGroup.add(police);
    policeGroup.add(police1);
    policeGroup.add(police2);
    policeGroup.add(police3);

    police.velocityX = 5;
    police1.velocityX = 2;
    police2.velocityX = -7;
    police3.velocityX = -10;
    

}

function draw(){
    background("black");

    if(keyDown(UP_ARROW)){
        thief.y = thief.y - 5;
    }

    if(keyDown(DOWN_ARROW)){
        thief.y = thief.y + 5;
    }

    if(keyDown(RIGHT_ARROW)){
        thief.x = thief.x + 5;
        thief.mirrorX(1);
    }

    if(keyDown(LEFT_ARROW)){
        thief.x = thief.x - 5;
        thief.mirrorX(-1);
    }

    if(police.velocityX == 5){
        police.mirrorX(1);
    }

    if(police.velocityX == -5){
        police.mirrorX(-1);
    }

    if(police1.velocityX == 2){
        police1.mirrorX(1);
    }

    if(police1.velocityX == -2){
        police1.mirrorX(-1);
    }

    if(round(police2.velocityX) == 7){
        police2.mirrorX(1);
    }

    if(round(police2.velocityX) == -7){
        police2.mirrorX(-1);
    }

    if(round(police3.velocityX) == 10){
        police3.mirrorX(1);
    }

    if(round(police3.velocityX) == -10){
        police3.mirrorX(-1);
    }

    if(thief.isTouching(policeGroup) && lives > 0){
        lives = lives - 1;
        thief.x = 50;
        thief.y = 760;
    }

    if(lives <= 0){
        policeGroup.destroyEach();
        blockGroup.destroyEach();
        chest.destroy();
        thief.destroy();
        background(cell_img);
        textSize(60);
        fill("red");
        text("YOU ARE CAUGHT, LOL",50,400);

        
    
    }

    if(lives == 3){
        fill("green");
    }

    if(lives == 2){
        fill("yellow");
    }

    if(lives <= 1){
        fill("red");
    }
    textSize(20);
    text("Lives:" + lives,670,790);
    

  
    

    

    thief.collide(blockGroup);
    police.bounceOff(blockGroup);
    edges =  createEdgeSprites();
    police.bounceOff(edges);
    thief.collide(edges);
    police1.bounceOff(blockGroup);
    police1.bounceOff(edges);
    police2.bounceOff(edges);
    police2.bounceOff(blockGroup);
    police3.bounceOff(blockGroup);
    police3.bounceOff(edges);

   

    




drawSprites();
}
