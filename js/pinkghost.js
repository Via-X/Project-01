class PinkGhost {
  constructor(map, game) 
  {
    this.game = game;
    this.map = map;
    this.projectedPosition = [0,0];
    this.currentPosition = [10,11];
    this.prevPosition = null;
    this.directionX = 0;
    this.directionY = 0;
    this.collidePacman = false;

    // this.direction = 0  - Stay in place
    // this.direction = 1  - Move left 
    // this.direction = 2  - Move right 
    // this.direction = 3  - Move up
    // this.direction = 4  - Move down
     
  }



  generateGhostMove()
  {
    // this.directionX = 0;
    // this.directionY = 0;
    const randomNum = Math.floor(Math.random() * 4) + 1;
    switch (randomNum) 
    {
      case 1:
        // console.log("Move Left - Ghost");
        this.directionX = -1;
        this.move();
        break;
      case 2:
        // console.log("Move Right - Ghost");
        this.directionX = 1;
        this.move();
        break;
      case 3:
        // console.log("Move Up - Ghost");
        this.directionY = -1;
        this.move();
        break;
      case 4:
        // console.log("Move Down - Ghost");
        this.directionY = 1;
        this.move();
        break;
    }
  }



  move() 
  {
    // this.game = instance;
    switch (this.directionX) 
    {
      case -1:
        // console.log("Move Left - Ghost");
        if(this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 0 || 
          this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 1 ||
          this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 11 )
        {
          this.directionX = 0;
          this.directionY = 0;

          if(this.didCollide())
          {
            if(this.game.superPacman[1])
            {
              this.game.resetPinkGhost();
            } else
            {
              this.game.reset();
            }
          } else 
          {
            this.currentPosition[1] = this.currentPosition[1] -1;
            this.updatePosition();
          }
        }
        break;
      case 1:
        // console.log("Move Right - GhostJS");
        if(this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 0 || 
          this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 1 ||
          this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 11 )
        {
          this.directionX = 0;
          this.directionY = 0;
  
          if(this.didCollide())
          {
            if(this.game.superPacman[1])
            {
              this.game.resetPinkGhost();
            } else
            {
              this.game.reset();
            }
          } else 
          {
            this.currentPosition[1] = this.currentPosition[1] + 1;
            this.updatePosition();
          }
        }
        break;
    }

    switch (this.directionY) 
    {
      case -1:
        // console.log("Move UP - GhostJS");
        if(this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 0 || 
          this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 1 ||
          this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 11 )
        {
          this.directionX = 0;
          this.directionY = 0;

          if(this.didCollide())
          {
            if(this.game.superPacman[1])
            {
              this.game.resetPinkGhost();
            } else
            {
              this.game.reset();
            }
          } else 
          {
            this.currentPosition[0] = this.currentPosition[0] -1;
            this.updatePosition();
          }
        }
        break;
      case 1:
        // console.log("Move Down - GhostJS");
        if(this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 0 || 
          this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 1 ||
          this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 11 )
        {
          this.directionX = 0;
          this.directionY = 0;

          if(this.didCollide())
          {
            if(this.game.superPacman[1])
            {
              this.game.resetPinkGhost();
            } else
            {
              this.game.reset();
            }
          } else 
          {
            this.currentPosition[0] = this.currentPosition[0] + 1;
            this.updatePosition();
          }
        }
        break;
    }
    


  }

  didCollide() 
  {
    //Check Block to the Left
    if(this.map[this.currentPosition[0]][this.currentPosition[1] - 1] === 2 )
    {
      console.log("PINK GHOST Collided Left");
      this.collidePacman = true;
    }

    //Check Block to the Right
    if(this.map[this.currentPosition[0]][this.currentPosition[1] + 1] === 2 )
    {
      console.log("PINK GHOST Collided Right");
      this.collidePacman = true;
    }

    //Check Block Above
    if(this.map[this.currentPosition[0] - 1][this.currentPosition[1]] === 2 )
    {
      console.log("PINK GHOST Collided Above");
      this.collidePacman = true;
    }

    //Check Block Below
    if(this.map[this.currentPosition[0] + 1][this.currentPosition[1]] === 2 )
    {
      console.log("PINK GHOST Collided Below");
      this.collidePacman = true;
    }

    return this.collidePacman;
  }

  updatePosition() 
  {
    this.map[this.currentPosition[0]][this.currentPosition[1]] = 3;
    const displayPac = document.getElementById(`${this.currentPosition[0]}-${this.currentPosition[1]}`);
    const image = document.createElement('img');
    if(this.game.superPacman[1])
    {
      console.log("scared red actived");
      image.src = "./images/scared-ghost.gif";
    } else 
    {
      image.src = "./images/pink-ghost.gif";
    }
    image.classList.add('red-ghost');
    displayPac.appendChild(image);
    
    if(this.prevPosition)
    {
       const removeGhost = document.getElementById(`${this.prevPosition[0]}-${this.prevPosition[1]}`);
       const image = removeGhost.querySelector('img');
      
       if (removeGhost.classList.contains("map-dot-block"))
       {
        this.map[this.prevPosition[0]][this.prevPosition[1]] = 1;
       } else if( removeGhost.classList.contains("star"))
       {
        this.map[this.prevPosition[0]][this.prevPosition[1]] = 11;
       } else 
       {
        this.map[this.prevPosition[0]][this.prevPosition[1]] = 0;
       }
       removeGhost.removeChild(image);

    }
    this.prevPosition = [...this.currentPosition];
  }

}