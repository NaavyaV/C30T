const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, bg, bgImg;
var score = 0;
function preload(){
  getBackgroundImg()
}
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,390,900,20);
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  blocks9 = new Block(700,95,30,40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon,{x:100, y:200});

  polygonPic = loadImage('ImagesC29/Polygon.png');

}

function draw(){
  if(bgImg)
    background(bgImg);

    Engine.update(engine);

    textSize(20)
    text('Score: ' + score, 50, 50)

    ground.display();
    stand1.display();
    stand2.display();

    fill('red');
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill('orange');
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill('yellow');
    block13.display();
    block14.display();
    block15.display();
    fill('green');
    block16.display();

    fill('red');
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill('yellow');
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill('green');
    blocks9.display();



    fill('red');
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    fill('orange');
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    fill('yellow');
    block13.score();
    block14.score();
    block15.score();
    fill('green');
    block16.score();

    fill('red');
    blocks1.score();
    blocks2.score();
    blocks3.score();
    blocks4.score();
    blocks5.score();
    fill('yellow');
    blocks6.score();
    blocks7.score();
    blocks8.score();
    fill('green');
    blocks9.score();

    slingShot.display();

    imageMode(CENTER);
    image(polygonPic, polygon.position.x - 10, polygon.position.y, 40, 40)

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon, {x: 200, y: 100});
      slingShot.attach(this.polygon);
  }
} 

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = 'ImagesC29/DBP30 WhiteHat.png'
  }
  else{
      bg = 'ImagesC29/LBC30 Whitehat.png'
  }
  bgImg = loadImage(bg);
}
