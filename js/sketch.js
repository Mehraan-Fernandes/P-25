const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;

//function preload(){
//    paper.addImage("assetes/paper.png")
//}
function setup(){
    
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(100,200,20)
    ground = new Ground(400,380,900,20)
    dustbinObj1 = new Dustbin(585,302,20,136)
    dustbinObj2 = new Dustbin(645,362,100,18)
    dustbinObj3 = new Dustbin(705,302,20,136)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    paper.display();
    dustbinObj1.display();
    dustbinObj2.display();
    dustbinObj3.display();

}

function keyPressed(){
    if(keyCode === 32){
        console.log(keyPressed)
        Matter.Body.applyForce(paper.paper,paper.paper.position,{x:80,y:75})  
    }
}