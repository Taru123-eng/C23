const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Ground2;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    Ground2 = new Ground(200,380,400,20)
    box2 = new Box(230,100,50,100)
}

function draw(){
    background("red");
    Engine.update(engine);
    box1.display();
    fill("pink")
    Ground2.display();
    box2.display();
   
}