class Form {

    constructor() {
      this.input = createInput("Enter your Name");
      this.input2 = createInput("Enter your option")
      this.button = createButton('Submit');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.input2.hide();
    
    }
  
    display(){
      title = createElement('h2')
      title.html("My Quiz Game");
      title.position(350, 0);
      
  
      this.input.position(200, 235);
      this.input2.position(390,235);
      this.button.position(320, 260);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.hide();
        contestant.name = this.input.value();
        contestant.Answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        this.greeting.html("Hello " + contestant.name)
        this.greeting.position(130, 100);
      });
  
    }
  }