const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2, stand3;
var ball;
var slingShot;
var polygon_img;
var score
function preload(){
  polygon_img = loadImage("polygon.png");
  fetchtime();
  score=0

}

function setup() {
    engine = Engine.create();
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  score=0
  ground = new Ground();

  polygon = Bodies.circle(50,50,20);
  World.add(world, polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});

 
  block1 = new Block(300,275,30,40);
  console.log(block1);
  
 


    block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("yellow");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("black");
  block13.display();
  block14.display();
  block15.display();
  
  slingShot.display();
  textSize(24);
  text("SCORE : "+score,750,40);

  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
 

}
function draw() {
  
 
  

  

  slingShot.display();
  ground.display();
  stand1.display();
  

 

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}
async function fetchtime()
{
    var time=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data=await time.json();
    console.log(data);
    var hour=data.datetime.slice(11,13);
    if(hour>=6&&hour<=18)
    {
      bg=color("azure");
      txtcolor=color("black")
    }
    else{
       bg=color("black")
       txtcolor=color("white")
    }
  }