var bgImg,table,tableImg,ball,ballImg,racket1,racket1Img,racket2,racket2Img;
var player1,player2,player1Img,player2Img

function preload(){
  bgImg=loadImage("assets/rio 2016 1.jpg")
  tableImg=loadImage("assets/rio-table-tennis_table.png")
   player1Img=loadImage("assets/table tennis racket 2.png")
   player2Img=loadImage("assets/Table_tennis_racket.png")
   
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    table=createSprite(windowWidth/2,windowHeight/2+85,50,100);
    table.scale=2
player1=createSprite(650,200,100,100)
// HOW DO YOU MAKE AN OBJECT FOLLOW THE CURSOR
player2=createSprite(/*World.mouse.x*/650,500,100,100)
player2.scale=0.3
//player2.x=World.mouse.x
}
function draw(){
    background(bgImg);
    table.addImage("table1",tableImg);
  //  player1.addImage("player1",player1Img);
    player2.addImage("player2",player2Img);
    
    
    
    
    
    
    
  drawSprites();
}
