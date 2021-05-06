const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world


var holder,ball,ground;
var stand1,stand2;
var ball;
var SlingShot;

function preload () {

}

function setup(){
engine=Engine.create();
world=engine.world

createCanvas(900,400);
ground=new Ground(700,300,270,10);

ground2=new Ground(380,300,270,10);


//set one

//level one
blocks1 = new Box(280,275,30,40);
blocks2 = new Box(310,275,30,40);
blocks3 = new Box(340,275,30,40);
blocks4 = new Box(370,275,30,40);
blocks5 = new Box(400,275,30,40);
blocks6 = new Box(430,275,30,40);
blocks7 = new Box(460,275,30,40);
blocks8 = new Box(490,275,30,40);``

//level two
blocks9 = new Box(310,235,30,40);
blocks10 = new Box(340,235,30,40);
blocks11 = new Box(370,235,30,40);
blocks12 = new Box(400,235,30,40);
blocks13 = new Box(430,235,30,40);
blocks14 = new Box(460,235,30,40);

//level three
blocks15 = new Box(340,195,30,40);
blocks16 = new Box(370,195,30,40);
blocks17 = new Box(400,195,30,40);
blocks18 = new Box(430,195,30,40);

//level four
blocks19 = new Box(370,155,30,40);
blocks20 = new Box(400,155,30,40);

//level five
blocks21 = new Box(385,115,30,40);

//set two
//level one
block1= new Box(640,175,30,40)
block2= new Box(670,175,30,40)
block3= new Box(700,175,30,40)
block4= new Box(730,175,30,40)
block5= new Box(760,175,30,40)
//level two
block6= new Box(670,135,30,40)
block7= new Box(700,135,30,40)
block8= new Box(730,135,30,40)
//level three
block9= new Box(700,95,30,40)

ball=Bodies.circle(50,200,20)
slingshot=new Slingshot(this.ball,{x:200,y:200});
}

function draw(){
rectMode(CENTER);
rect(20,200,50,50)
background(0);

Engine.update(engine);
ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    ground2.display();
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();
    blocks10.display();
    blocks11.display();
    blocks12.display();
    blocks13.display();
    blocks14.display();
    blocks15.display();
    blocks16.display();
    blocks17.display();
    blocks18.display();
    blocks19.display();
    blocks20.display();
    blocks21.display();
    text("drag the line and release to hit the   boxes,600,250")
    ellipse(ball.position.x,ball.position.y,20)
    slingshot.display();

drawSprites();
}

function mouseDragged(){
ellipse(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}



