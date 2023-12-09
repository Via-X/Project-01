class Player {
  constructor(map, game) 
  {
    this.game = game;
    this.map = map;
    this.projectedPosition = [0,0];
    this.currentPosition = [19,10];
    this.prevPosition = null;
    this.directionX = 0;
    this.directionY = 0;
    this.collide = false;
   
   
    this.pacFacing = 2;       // 1 Up, 2 Right, 3 Down, 4 Left  
  }


  move() 
  {
    switch (this.directionX) 
    {
      case -1:
        // console.log("Move Left - Pacman");
        if(this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 0 || 
          this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 1 || 
          this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 11 )
        {
          this.directionX = 0;
          this.directionY = 0;
          
          if(this.didCollide())
          {
            this.game.reset();
          } else 
          {
            if(this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 1)
            {
              this.game.points += 1;
            } else if (this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 11) 
            {
              this.game.points += 10;
              this.game.superPacman = [true, true, true];
            }
            this.currentPosition[1] = this.currentPosition[1] -1;
            this.pacFacing = 4;
            this.updatePosition();

          }
        }
        break;
      case 1:
        // console.log("Move Right - Pacman");
        if(this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 0 || 
          this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 1 ||
          this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 11 )
        {
          this.directionX = 0;
          this.directionY = 0;

          if(this.didCollide())
          {
            this.game.reset();
            // return true;
          } else 
          {
            if(this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 1)
            {
              this.game.points += 1;
            } else if (this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 11) 
            {
              this.game.points += 10;
              this.game.superPacman = [true, true, true];
            }

            this.currentPosition[1] = this.currentPosition[1] + 1;
            this.pacFacing = 2;
            this.updatePosition();     
          }
        }    
        break;
    }

    switch (this.directionY) 
    {
      case -1:
        // console.log("Move UP - Pacman");
        if(this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 0 || 
          this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 1 ||
          this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 11 )
        {
          this.directionX = 0;
          this.directionY = 0;

          if(this.didCollide())
          {
            this.game.reset();
          } else 
          {
            if(this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 1)
            {
              this.game.points += 1;
            } else if (this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 11)
            {
              this.game.points += 10;
              this.game.superPacman = [true, true, true];
            }
    
            this.currentPosition[0] = this.currentPosition[0] -1;
            this.pacFacing = 1;
            this.updatePosition();
    
          }
        }
      
        break;
      case 1:
        // console.log("Move Down - Pacman");
        if(this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 0 || 
          this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 1 ||
          this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 11 )
        {
          this.directionX = 0;
          this.directionY = 0;

          if(this.didCollide())
          {
            this.game.reset();
          } else 
          {
            if(this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 1)
            {
              this.game.points += 1;
            } else if (this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 11)
            {
              this.game.points += 10;
              this.game.superPacman = [true, true, true];
            } 
     
            this.currentPosition[0] = this.currentPosition[0] + 1;
            this.pacFacing = 3;
            this.updatePosition();
     
          }
        }      
        break;
    }
  }


  didCollide() 
  {
    //Check Block to the Left
    if(this.map[this.currentPosition[0]][this.currentPosition[1] - 1] === 3 ||
      this.map[this.currentPosition[0]][this.currentPosition[1] - 1] === 4 ||
      this.map[this.currentPosition[0]][this.currentPosition[1] - 1] === 5 )
    {
      console.log("PAC Collided on Left");
      this.collide = true;
    }

    //Check Block to the Right
    if(this.map[this.currentPosition[0]][this.currentPosition[1] + 1] === 3 ||
      this.map[this.currentPosition[0]][this.currentPosition[1] + 1] === 4 ||
      this.map[this.currentPosition[0]][this.currentPosition[1] + 1] === 5 )
    {
      console.log("PAC Collided on Right");
      this.collide = true;
    }

    //Check Block Above
    if(this.map[this.currentPosition[0] - 1][this.currentPosition[1]] === 3 ||
      this.map[this.currentPosition[0] - 1][this.currentPosition[1]] === 4 ||
      this.map[this.currentPosition[0] - 1][this.currentPosition[1]] === 5 )
    {
      console.log("PAC Collided Above");
      this.collide = true;
    }

    //Check Block Below
    if(this.map[this.currentPosition[0] + 1][this.currentPosition[1]] === 3 ||
      this.map[this.currentPosition[0] + 1][this.currentPosition[1]] === 4 ||
      this.map[this.currentPosition[0] + 1][this.currentPosition[1]] === 5 )
    {
      console.log("PAC Collided Below");
      this.collide = true;
    }
    this.game.playPacDeath();
    return this.collide;
  }

  updatePosition() 
  {
    this.game.playChomp();
    this.map[this.currentPosition[0]][this.currentPosition[1]] = 2;
    
    const displayPac = document.getElementById(`${this.currentPosition[0]}-${this.currentPosition[1]}`);
    const image = document.createElement('img');
    image.src = "./images/pac-man-eating.gif";
    image.classList.add('pac-man');


    // const direction = document.getElementsByClassName('pac-man');
    switch (this.pacFacing)
    {
      case 1:   
        image.style.transform = 'rotate(270deg)';
        break;
      case 2:
        console.log("Already facing Right");
        break;
      case 3:
        image.style.transform = 'rotate(90deg)';
        break;
      case 4:
        image.style.transform = 'scaleX(-1)';
        break;
      default:
        console.log("pacFacing value not matched" + this.pacFacing);
    }
    console.log(this.pacFacing);
    displayPac.appendChild(image);

    this.pacFacing = 0;
    
    this.game.moves += 1;
   

    if(this.prevPosition)
    {
       this.map[this.prevPosition[0]][this.prevPosition[1]] = 0;
       const removePac = document.getElementById(`${this.prevPosition[0]}-${this.prevPosition[1]}`);
       removePac.classList.remove('map-dot-block');
       if(
          this.map[this.prevPosition[0]][this.prevPosition[1]] == [3,3] || 
          this.map[this.prevPosition[0]][this.prevPosition[1]] == [3,17] || 
          this.map[this.prevPosition[0]][this.prevPosition[1]] == [17,3] || 
          this.map[this.prevPosition[0]][this.prevPosition[1]] == [17-17] 
          )
          {
            removePac.classList.remove('star');
          }
       const image = removePac.querySelector('img');
       removePac.removeChild(image);

       console.log("Total Points Earned " + this.game.points);
    }
    this.prevPosition = [...this.currentPosition];
  }

}