var stone
var box1,box2,box3

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  stone = new Stone (400,100)

  box1 = new Stone(760,120,150, PI/7);
  box2 = new Stone(870,120,150, -PI/7);
  box3 = new Stone(230,180,80, PI/2)

}

function draw() {
  background(255,255,255); 

  stone.display();
  box1.display();
  box2.display();
  box3.display();

  
 
  drawSprites();
}