const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1700,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height-10,width,20);

    ball = new Ball(0,50);
    string = new String(ball.body,{x:500, y:50});

    boxa1 = new Box(700,680);
    boxa2 = new Box(700,580);
    boxa3 = new Box(700,480);
    boxa4 = new Box(700,380);
    boxa5 = new Box(700,280);
    boxa6 = new Box(700,180);
    boxa7 = new Box(700,80);

    boxb1 = new Box(750,680);
    boxb2 = new Box(750,580);
    boxb3 = new Box(750,480);
    boxb4 = new Box(750,380);
    boxb5 = new Box(750,280);
    boxb6 = new Box(750,180);
    boxb7 = new Box(750,80);

    boxc1 = new Box(800,680);
    boxc2 = new Box(800,580);
    boxc3 = new Box(800,480);
    boxc4 = new Box(800,380);
    boxc5 = new Box(800,280);
    boxc6 = new Box(800,180);
    boxc7 = new Box(800,80);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    ball.display();
    string.display();

    boxa1.display();
    boxa2.display();
    boxa3.display();
    boxa4.display();
    boxa5.display();
    boxa6.display();
    boxa7.display();

    boxb1.display();
    boxb2.display();
    boxb3.display();
    boxb4.display();
    boxb5.display();
    boxb6.display();
    boxb7.display();

    boxc1.display();
    boxc2.display();
    boxc3.display();
    boxc4.display();
    boxc5.display();
    boxc6.display();
    boxc7.display();
}

// function keyPressed(){
//     if(keyCode === 32){
//         Body.applyForce(ball.body,{x:-450,y:0});
//     }
// }