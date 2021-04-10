const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var boy;

var tree;
var treeImg;

var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var mango11;
var mango12;
var mango13;
var mango14;
var mango15;
var mango16;
var mango17;
var mango18;
var mango19;
var mango20;
var mango21;
var mango22;
var mango23;
var mango24;
var mango25;
var mango26;
var mango27;
var mango28;
var mango29;
var mango30;
var mango31;
var mango32;

var rock;

function preload(){
	treeImg = loadImage("Project-28-Images/tree.png")
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 680, 2000, 40);

	boy = new Boy(200, 300, 150, 350)

	tree = createSprite(900, 300, 350, 650);
	tree.addImage(treeImg);
	tree.scale = 0.5;

	mango1 = new Mango(670, 225);
	mango2 = new Mango(760, 135);
	mango3 = new Mango(860, 175);
	mango4 = new Mango(770, 245);
	mango5 = new Mango(740, 170);
	mango6 = new Mango(790, 195);
	mango7 = new Mango(715, 220);
	mango8 = new Mango(820, 250);
	mango9 = new Mango(810, 145);
	mango10 = new Mango(875, 220);
	mango11 = new Mango(690, 170);
	mango12 = new Mango(855, 115);
	mango13 = new Mango(920, 220);
	mango14 = new Mango(800, 80);
	mango15 = new Mango(845, 60);
	mango16 = new Mango(905, 160);
	mango17 = new Mango(900, 90);
	mango18 = new Mango(905, 35);
	mango19 = new Mango(950, 120);
	mango20 = new Mango(975, 185);
	mango21 = new Mango(975, 235);
	mango22 = new Mango(960, 60);
	mango23 = new Mango(1005, 105);
	mango24 = new Mango(1005, 150);
	mango25 = new Mango(1030, 200);
	mango26 = new Mango(1055, 145);
	mango27 = new Mango(1075, 220);
	mango28 = new Mango(1100, 170);
	mango29 = new Mango(1115, 230);
	mango30 = new Mango(1155, 190);
	mango31 = new Mango (970, 5);
	mango32 = new Mango(1080, 110);

	rock = new Rock(155, 405, 20, 20);

	Engine.run(engine);
  
}


function draw() {
  	background("lightgrey");

	drawSprites();

	Engine.update(engine);

 	ground.display();

  	boy.display();

  	tree.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	mango16.display();
	mango17.display();
	mango18.display();
	mango19.display();
	mango20.display();
	mango21.display();
	mango22.display();
	mango23.display();
	mango24.display();
	mango25.display();
	mango26.display();
	mango27.display();
	mango28.display();
	mango29.display();
	mango30.display();
	mango31.display();
	mango32.display();

	rock.display();
}