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
    this.superPacman = [false, false, false];
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

    this.pinkGhost = new PinkGhost(this.map.getMap(), this);
    this.pinkGhost.updatePosition();

    this.orangeGhost = new OrangeGhost(this.map.getMap(), this);
    this.orangeGhost.updatePosition();
    // setInterval(, 1);

    // Start the game loop
    window.requestAnimationFrame(() => this.gameLoop())
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

    //Set timer to delay start <HERE>
    this.pinkGhost.generateGhostMove()
    this.orangeGhost.generateGhostMove()
  

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
    console.log("BIG PAC Status: " + this.superPacman);
    console.log("COLLIDED - *******Lives left: " + this.lives + "*************");
    this.player.collide = false;
    this.player.currentPosition = [19,10];
    this.player.updatePosition();
    this.resetRedGhost();
    this.resetPinkGhost();
    this.resetOrangeGhost();

  }


  resetRedGhost()
  {
    this.redGhost.collidePacman = false;
    this.redGhost.currentPosition = [10,10];
    this.redGhost.updatePosition();
    this.superPacman[0] = false;
    this.points += 30;
  }

  resetPinkGhost()
  {
    this.pinkGhost.collidePacman = false;
    this.pinkGhost.currentPosition = [10,11];
    this.pinkGhost.updatePosition();
    this.superPacman[1] = false;
    this.points += 40;
  }

  resetOrangeGhost()
  {
    this.orangeGhost.collidePacman = false;
    this.orangeGhost.currentPosition = [10,9];
    this.orangeGhost.updatePosition();
    this.superPacman[2] = false;
    this.points += 50;
  }

  endGame() 
  {
    this.gameIsOver = true;
    console.log(this.map);
  }
}



