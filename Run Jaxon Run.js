var jaxon, jaxon_running;
function preload(){
  jaxon_running = loadAnimation("jaxon1.png","jaxon2.png","jaxon3.png","jaxon4.png");
}







function setup(){
  createCanvas(600,200)
  jaxon=createSprite(40,170,30,50);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale=0.5;
  jaxon.x=40;

}







function draw() {
  background('green');
if(keyDown("space"))
{
  jaxon.velocityY = -12;
}

jaxon.velocityY = jaxon.velocityY + 0.5; 
trex.collide(edges[3]);
trex.collide(ground);

drawSprites();
}
