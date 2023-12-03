class Game 
{
  constructor() {
    this.map = new CreateMap();
    this.player = null;
    this.ghost = null;
    // this.playerPosition = [19,10];
    // this.ghostPosition = [10,10];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;

  };

  start() 
  {
    // console.log("START - GAMEJS");
    this.map.displayMap();
    this.player = new Player(this.map.getMap(), this);
    this.player.updatePosition();
    

    //Create ghost
    this.ghost = new Ghosts(this.map.getMap(), this);
    this.ghost.updatePosition();
    // setInterval(, 1);


    // Start the game loop
      this.gameLoop();
  }
    
  gameLoop() 
  {
    // console.log("GAMELOOP - GAMEJS");
   
      
    if (this.gameIsOver) 
    {
      return;
    }
      
    this.update();
      
    window.requestAnimationFrame(() => this.gameLoop());
  }
  
  

  update() 
  {
    // if(this.player.didCollide())
    // {
      
    //   this.reset();
    // };

    this.player.move();
    //Crea a new Ghost

    this.ghost.generateGhostMove();
    //Check for collision 

   

    //if lives are 0
    if(this.lives === 0)
    {
      this.endGame();
    }
   
  }
  
  reset()
  {
    this.lives --;
    console.log("COLLIDED - Lives left: " + this.lives);
    this.ghost.collide = false;
    // this.ghost.directionX = 0;
    // this.ghost.directionY = 0;
    this.player.collide = false;
    // this.player.directionX = 0;
    // this.player.directionY = 0;
    console.log("PacMan PreCords" + this.player.prevPosition);
    console.log("PacMan Cords" + this.player.currentPosition);
    console.log("Ghost PreCords" + this.ghost.prevPosition);
    console.log("Ghost Cords" + this.ghost.currentPosition);
    this.player.currentPosition = [19,10];
    this.ghost.currentPosition = [10,10];
    this.player.updatePosition();
    this.ghost.updatePosition();

  }

//Create a new method responsible for ending the game
  endGame() 
  {
    this.gameIsOver = true;
  }
}



