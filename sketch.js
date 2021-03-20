var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    rb = createSprite(100, 550, 200, 100)
    yb = createSprite(300, 550, 200, 100)
    gb = createSprite(500, 550, 200, 100)
    bb = createSprite(700, 550, 200, 100)
    rb.shapeColor = "red"
    yb.shapeColor = "gold"
    gb.shapeColor = "green"
    bb.shapeColor = "blue"


    box = createSprite(25, 25, 50, 50)
    box.velocityX = 14;
    box.velocityY = 21;

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();




    if(touching(box, rb)) {
        box.shapeColor = "red"
        boingboing();
    }
    if(touching(box, yb)) {
        box.shapeColor = "gold"
        boingboing();
    }
    if(touching(box, gb)) {
        box.shapeColor = "green"
        boingboing();
    }
    if(touching(box, bb)) {
        box.shapeColor = "blue"
        boingboing();
    }
    
    drawSprites();
}
