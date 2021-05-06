var database;
var patra;
var game, patra, player;
var Gmstorage = 0,
  Plstorage = 0;
var readplayer;
var car1img, car4img, trackimg0, cs1, cs4, cararray = [];

function preload() {
  car1img = loadImage("car1.png");
  car4img = loadImage("car4.png");
  trackimg0 = loadImage("track.jpg");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  game = new KHEL();

  game.readGameState();

  game.startTheGame();
}

function draw() {
  background("white");

  if (Plstorage == 2) {
    game.writeGameState(1);
  }

  if (Gmstorage == 1) {
    game.playTheGM();
  }
}
