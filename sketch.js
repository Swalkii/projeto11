
var barco, sea, barcoanimation;
var seaimage;


function preload(){
barcoanimation = loadAnimation("ship1.png", "ship2.png", "ship4.png", "ship3.png");
seaimage = loadImage("sea.png");

}

function setup(){
  createCanvas(800,340);


  sea = createSprite(200,170,800,340);
  sea.addImage("sea",seaimage);
  sea.scale=0.3;

  barco = createSprite (100,150,30,30);
  barco.addAnimation ("running",barcoanimation);
  barco.scale=0.2;

}

function draw() {
  background("lightblue");

  sea.velocityX = -2.5;
  console.log(sea.x)

  if(sea.x<20){

  // sea.x=sea.width/2;
   sea.x= 800;
  }


    drawSprites();
}

