const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19,box20,box2,box21,box22;
var superHero, Rope ,monster

var backgroundImg,bg,bgImg;

function preload() {
  bgImg = loadImage("images/GamingBackground.png");
  monster = loadImage("images/Monster-01.png");
  superHero = loadImage("images/Superhero-02.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  box1 =  new Box(900,100,50,50);
  box2 = new Box(900,150,50,50);
  box3 = new Box(900,200,50,50);
  box4 = new Box(900,250,50,50);
  box5 = new Box(900,350,50,50);
  box6 = new Box(900,400,50,50);
  box7 = new Box(800,100,50,50);
  box8 = new Box(800,150,50,50);
  box9 = new Box(800,200,50,50);
  box10 = new Box(800,250,50,50);
  box11 = new Box(700,100,50,50);
  box12 = new Box(700,150,50,50);
  box13 = new Box(700,200,50,50);
  box14 = new Box(700,250,50,50);
  box15 = new Box(700,300,50,50);
  box16 = new Box(700,350,50,50);
  box17 = new Box(600,100,50,50);
  box18 = new Box(600,150,50,50);
  box19 = new Box(600,200,50,50);
  box20 = new Box(600,250,50,50);
  box21 = new Box(600,300,50,50);
  box22 = new Box(600,350,50,50);

  superHero = new superhero(200,200,80,80);
  Rope = new rope(superHero.bodyS,{x: 500,  y: 50});

}

function draw() {
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  superHero.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superHero.body,{x:mouseX, y: mouseY});
}
