var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var balls, ball1, ball2;
var pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10;
var pin11, pin12, pin13, pin14, pin15, pin16, pin17, pin18, pin19, pin20;

var ball, pin, game, form, player;

var backgroundImg, pinImg, pins_img, redBall, redBallImg, blueBall, blueBallImg;
var invisibleLeft, invisibleMid, invisibleRight;

function preload(){
  backgroundImg = loadImage("BackgroundImg.png");
  pinImg = loadImage("Circle.png");
  pins_img = loadImage("bowlingPin.png");
  redBall = loadAnimation("ball1.png");
  redBallImg = loadAnimation("ball1.png", "ball2.png", "ball3.png", "ball4.png", "ball5.png");
  blueBall = loadAnimation("ball6.png");
  blueBallImg = loadAnimation("ball6.png", "ball7.png", "ball8.png", "ball9.png", "ball10.png");
}

function setup(){
  canvas = createCanvas(574, 680);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background("pink");
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
}
