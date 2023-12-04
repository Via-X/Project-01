class Game 
{
  constructor() {
    this.map = new CreateMap();
    this.player = null;
    this.redGhost = null;
    this.blueGhost = null;
    this.orangeGhost = null;
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.points = 0;

  };

  start() 
  {
    // console.log("START - GAMEJS");
    this.map.displayMap();
    this.player = new Player(this.map.getMap(), this);
    this.player.updatePosition();
    

    //Create ghost
    this.redGhost = new RedGhost(this.map.getMap(), this);
    this.redGhost.updatePosition();

    this.blueGhost = new BlueGhost(this.map.getMap(), this);
    this.blueGhost.updatePosition();

    this.orangeGhost = new OrangeGhost(this.map.getMap(), this);
    this.orangeGhost.updatePosition();
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
    this.player.move();
    //Crea a new Ghost

    this.redGhost.generateGhostMove();

    //if lives are 0
    if(this.lives === 0)
    {
      this.endGame();
    }

    this.map.searchMap();
    if(this.map.gameWon === 1)
    {
      console.log("YOU WON!");
      this.endGame();
    }
   
  }
  
  reset()
  {
    this.lives --;
    console.log("COLLIDED - Lives left: " + this.lives);
    this.redGhost.collide = false;
    this.player.collide = false;
    // console.log("PacMan PreCords" + this.player.prevPosition);
    // console.log("PacMan Cords" + this.player.currentPosition);
    // console.log("Ghost PreCords" + this.redGhost.prevPosition);
    // console.log("Ghost Cords" + this.redGhost.currentPosition);
    this.player.currentPosition = [19,10];
    this.redGhost.currentPosition = [10,10];
    this.player.updatePosition();
    this.redGhost.updatePosition();
  

  }

//Create a new method responsible for ending the game
  endGame() 
  {
    this.gameIsOver = true;
    console.log(this.map);
  }
}



