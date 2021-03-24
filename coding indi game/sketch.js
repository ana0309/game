const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

function preload(){
bg=loadImage("park background.jpg")

}


function setup() {
  createCanvas(1500,800);
  engine=Engine.create();
  world=engine.world
  cat1=new Cat (700,700,100,100)
  dog1=new Dog (600,700,100,100)

}

function draw() {
  background(bg);  
  cat1.display()
  dog1.display()

  drawSprites();
}