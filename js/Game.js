class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  
    play(){
      
      textSize(30);
      Contestant.getcontestantInfo();
     
      quiz.display();
  
      if(allcontestants !== undefined){
        var display_position = 260;
        background("yellow")
        quiz.display();
        form.hide();
        title.html("Result Of Quiz");
       fill("blue");
       textSize(20)
       text("NOTE:contestant who answered correct are highlighted in green color",130,240);
      
        for(var plr in allcontestants){
            var correctAnswer = "2";
          if (correctAnswer === allcontestants[plr].Answer)
            fill("green")
          else
            fill("red");
  
          display_position+=20;
          textSize(20);
          text(allcontestants[plr].name + ": " + allcontestants[plr].Answer, 120,display_position)
          
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
    }
  }