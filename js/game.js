class Game 
{
  constructor() {
    this.map = new CreateMap();
    this.player = null;
    this.playerPosition = [19,10];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;

  };

  start() 
  {
    console.log("start function called");
    // let startGame = new CreateMap();
    this.map.displayMap();
    this.player = new Player(this.map.getMap());
    console.log(this.playerPosition);
    this.player.updatePosition(this.playerPosition, null);
    
    // Start the game loop
  
    this.gameLoop();
  }
    
  gameLoop() 
  {
    console.log("in the game loop");
      
    if (this.gameIsOver) 
    {
      return;
    }
      
    // this.update();
      
    window.requestAnimationFrame(() => this.gameLoop());
  }
  
  

  update() 
  {
   
  }
  


//Create a new method responsible for ending the game
  endGame() 
  {
    this.gameIsOver = true;
  }
}



