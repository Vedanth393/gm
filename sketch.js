var sasuke,sasukeImg
var narutoImg,naruto
var swamp,swampImg

function preload(){
narutoImg=loadImage("Naruto.jpg")
sasukeImg=loadImage("Sasuke.png")
swampImg=loadImage("swamp.png")
}



function setup() {
 createCanvas(windowWidth,windowHeight)

 


sasuke=createSprite(width/2,height-300,30,30) 
sasuke.addImage("running",sasukeImg)
sasuke.velocityX=3;
sasuke.scale=.7

}

function draw() {
    background("white");
    sasuke.y= World.mouseY;
    drawSprites();
    
createNaruto()
}

function createNaruto(){
    if(World.frameCount % 200 == 0){
    var naruto=createSprite(Math.round(random(height-50,50),40,10,10))
    naruto.addImage("running",narutoImg)
    naruto.scale=0.7
    naruto.velocityX = 3
    }
}




