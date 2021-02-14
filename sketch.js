var wall1, wall2, wall3, wall4, maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8 , maze9, maze10, maze11, maze12, maze13,
    maze14, maze15, maze16, maze17, maze18, maze19, maze20, maze21, maze22, maze23, maze24, maze25, maze26, maze27, maze28, maze29,
    maze30, maze31, maze32, maze33, maze34, maze35, maze36, maze37, maze38, maze39, maze40, maze41, maze42;

function preload(){
    playerimg = loadImage('the boi for the game.png');
    evilscience = loadImage('evilscience.png');
    soliders = loadImage('gamesolider.png');
    
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-70);
    wall1 = createSprite(100,400, 10, 550);
    wall1.shapeColor = "brown";

    wall2 = createSprite(700,125, 1200, 10);
    wall2.shapeColor = "brown";
    
    wall3 = createSprite(1300,400, 10, 550);
    wall3.shapeColor = "brown";

    wall4 = createSprite(700, 675, 1200, 10);
    wall4.shapeColor = "brown";

   

    maze1 = createSprite(200, 200, 10, 150);
    maze1.shapeColor = "brown";

    maze2 = createSprite(300, 300, 10, 150);
    maze2.shapeColor = "brown";

    maze3 = createSprite(400, 200, 10, 150);
    maze3.shapeColor = "brown";

    maze4 = createSprite(500, 300, 10, 150);
    maze4.shapeColor = "brown";

    maze5 = createSprite(348, 378, 500, 10);
    maze5.shapeColor = "brown";

    maze6 = createSprite(250, 450, 100, 10);
    maze6.shapeColor = "brown";

    maze7 = createSprite(205, 525, 10, 150);
    maze7.shapeColor = "brown";

    maze8 = createSprite(230, 600, 100, 10);
    maze8.shapeColor = "brown";

    maze9 = createSprite(370, 525, 10, 150);
    maze9.shapeColor = "brown";

    maze10 = createSprite(420, 540, 100 ,10);
    maze10.shapeColor = "brown";

    maze11 = createSprite(500, 600, 100, 10);
    maze11.shapeColor = "brown";

    maze12 = createSprite(530, 525, 10, 150);
    maze12.shapeColor = "brown";

    maze13 = createSprite(550, 452, 100, 10);
    maze13.shapeColor = "brown";

    maze14 = createSprite(700, 530, 100, 10);
    maze14.shapeColor = "brown";

    maze15 = createSprite(650, 585, 10, 100);
    maze15.shapeColor = "brown";

    maze16 = createSprite(680, 480, 10, 100);
    maze16.shapeColor = "brown";

    maze17 = createSprite(730, 435, 100 , 10);
    maze17.shapeColor = "brown";

    maze18 = createSprite(830, 530, 10, 100);
    maze18.shapeColor = "brown";

    maze19 = createSprite(730, 598, 60, 10);
    maze19.shapeColor = "brown";

    maze20 = createSprite(950, 450, 100, 10);
    maze20.shapeColor = "brown";

    maze21 = createSprite(920, 550, 10, 75);
    maze21.shapeColor = "brown";

    maze22 = createSprite(1050, 522, 100, 10);
    maze22.shapeColor = "brown";

    maze23 = createSprite(1100, 620, 75, 10);
    maze23.shapeColor = "brown";

    maze24 = createSprite(999, 630, 10, 50);
    maze24.shapeColor = "brown";

    maze25 = createSprite(1200, 525, 10, 150);
    maze25.shapeColor = "brown";

    maze26 = createSprite(1150, 452, 100 , 10);
    maze26.shapeColor = "brown";

    maze27 = createSprite(1050, 350, 100, 10);
    maze27.shapeColor = "brown";

    maze28 = createSprite(1200, 330, 10, 100);
    maze28.shapeColor = "brown";

    maze29 = createSprite(650, 200, 100, 10);
    maze29.shapeColor = "brown";

    maze30 = createSprite(700, 278, 10, 150);
    maze30.shapeColor = "brown";

    maze31 = createSprite(830, 278, 10, 150);
    maze31.shapeColor = "brown";

    maze32 = createSprite(950, 278, 100, 10);
    maze32.shapeColor = "brown";

    maze33 = createSprite(1200, 150, 10, 50);
    maze33.shapeColor = "brown";

    maze34 = createSprite(1100, 210, 10, 50);
    maze34.shapeColor = "brown";

    maze35 = createSprite(950, 180, 10, 50);
    maze35.shapeColor = "brown";

    player = createSprite(150,300);
    player.addImage(playerimg);

    solider1 = createSprite(275,500);
    solider1.addImage(soliders)

    
    solider2 = createSprite(300,360);
    solider2.addImage(soliders);

    solider3 = createSprite(250,545);
    solider3.addImage(soliders);

    scientist = createSprite(400,400);
    scientist.addImage(evilscience);



}
function draw(){
    background("#FFFACD");
    drawSprites();

}