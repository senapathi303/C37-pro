var canvas;
var gameState = 0;
var contestantCount;

var database;

var form, contestant, game,quiz;
var allcontestants;
var title;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  quiz = new Quiz();
}


function draw(){
  background("pink");
  quiz.display();
  if(contestantCount === 2){
    game.update(1);
   
     }
     else{
       game.update(0);
     }
     if(gameState === 1){
       clear();
       game.play();
     }
}
