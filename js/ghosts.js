class Ghosts {
  constructor(map, game) 
  {
    this.game = game;
    this.map = map;
    this.projectedPosition = [0,0];
    this.currentPosition = [10,10];
    this.prevPosition = null;
    this.directionX = 0;
    this.directionY = 0;
    this.collide = false;

    // this.direction = 0  - Stay in place
    // this.direction = 1  - Move left 
    // this.direction = 2  - Move right 
    // this.direction = 3  - Move up
    // this.direction = 4  - Move down
     
  }

  // generateGhosts()
  // {
  //   this.updatePosition(this.currentPosition);
  //   //randomize x,y code here
  //   // setInterval(this.generateMove(), 10);

  // }

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
        if(this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 0)
        {
          this.directionX = 0;
          this.directionY = 0;

          // this.projectedPosition[0] = this.currentPosition[0];
          // this.projectedPosition[1] = this.currentPosition[1] -1;
          // console.log(this.currentPosition + "MOVE GhostJS");
          if(this.didCollide())
          {
            console.log("GHOST - COLLIDE");
            this.game.reset();
            // break; 
          } else 
          {
            // this.prevPosition = [...this.currentPosition];
            this.currentPosition[1] = this.currentPosition[1] -1;
            this.updatePosition();
            // this.prevPosition = [...this.currentPosition];
          }
        }
        break;
      case 1:
        // console.log("Move Right - GhostJS");
        if(this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 0)
        {
          this.directionX = 0;
          this.directionY = 0;
          
          // this.projectedPosition[0] = this.currentPosition[0];
          // this.projectedPosition[1] = this.currentPosition[1] + 1;
          // console.log(this.currentPosition + "MOVE GhostJS");
          if(this.didCollide())
          {
            console.log("GHOST - COLLIDE");
            this.game.reset();
            // break;
          } else {
            // this.prevPosition = [...this.currentPosition];
            this.currentPosition[1] = this.currentPosition[1] + 1;
            this.updatePosition();
            // this.prevPosition = [...this.currentPosition];
          }
        }
        break;
    }

    switch (this.directionY) 
    {
      case -1:
        // console.log("Move UP - GhostJS");
        if(this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 0)
        {
          this.directionX = 0;
          this.directionY = 0;

          // this.projectedPosition[1] = this.currentPosition[1];
          // this.projectedPosition[0] = this.currentPosition[0] -1;
          // console.log(this.currentPosition + "MOVE GhostJS");
          if(this.didCollide())
          {
            console.log("GHOST - COLLIDE");
            this.game.reset();
            // break; 
          } else 
          {
            // this.prevPosition = [...this.currentPosition];
            this.currentPosition[0] = this.currentPosition[0] -1;
            this.updatePosition();
            // this.prevPosition = [...this.currentPosition];
          }
        }
        break;
      case 1:
        // console.log("Move Down - GhostJS");
        if(this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 0)
        {
          this.directionX = 0;
          this.directionY = 0;

          // this.projectedPosition[1] = this.currentPosition[1];
          // this.projectedPosition[0] = this.currentPosition[0] + 1;
          // console.log(this.currentPosition + "MOVE GhostJS");
          if(this.didCollide())
          {
            console.log("GHOST - COLLIDE");
            this.game.reset();
            break; 
          } else 
          {
            // this.prevPosition = [...this.currentPosition];
            this.currentPosition[0] = this.currentPosition[0] + 1;
            this.updatePosition();
            // this.prevPosition = [...this.currentPosition];
          }
        }
        break;
    }
    


  }

  didCollide() 
  {
    //Check Block to the Left
    if(
      this.map[this.currentPosition[0]][this.currentPosition[1] - 1] === 2 //|| 
      // this.map[this.projectedPosition[0]][this.currentPosition[1]] === 2
      // (
      //   this.currentPosition[0] - 3 < 21 && 
      //   this.currentPosition[0] - 3 >= 0 &&  
      //   this.currentPosition[1] < 21 && 
      //   this.currentPosition[1] >= 0 && 
      //   this.map[this.currentPosition[0]][this.currentPosition[1] - 2] === 2
      // )
      )
    {
      console.log("GHOST Collided Left");
      this.collide = true;
      // return this.collide;
    }

    //Check Block to the Right
    if(
      this.map[this.currentPosition[0]][this.currentPosition[1] + 1] === 2  //||
      // this.map[this.currentPosition[0]][this.currentPosition[1]] === 2
      // (
      //   this.currentPosition[0] < 21 &&
      //   this.currentPosition[0] >= 0 &&  
      //   this.currentPosition[1] + 3 < 21 && 
      //   this.currentPosition[1] + 3 >= 0  && 
      //   this.map[this.currentPosition[0]][this.currentPosition[1] + 2] === 2
      // )
      )
    {
      console.log("GHOST Collided Right");
      this.collide = true;
      // return this.collide;
    }

    //Check Block Above
    if(
      this.map[this.currentPosition[0] - 1][this.currentPosition[1]] === 2 //||
      // this.map[this.currentPosition[0]][this.currentPosition[1]] === 2
      // (
      //   this.currentPosition[0] - 3 < 21 && 
      //   this.currentPosition[0] - 3 >= 0 &&  
      //   this.currentPosition[1] < 21 && 
      //   this.currentPosition[1] >= 0  && 
      //   this.map[this.currentPosition[0] - 2][this.currentPosition[1]] === 2
      // )
      )
    {
      console.log("GHOST Collided Above");
      this.collide = true;
      // return this.collide;
    }

    //Check Block Below
    if(
      this.map[this.currentPosition[0] + 1][this.currentPosition[1]] === 2 //||
      // this.map[this.currentPosition[0]][this.currentPosition[1]] === 2
      // (
      //   this.currentPosition[0] < 21 && 
      //   this.currentPosition[0] >= 0 &&  
      //   this.currentPosition[1] + 3 < 21 && 
      //   this.currentPosition[1] + 3 >= 0 && 
      //   this.map[this.currentPosition[0] + 2][this.currentPosition[1]] === 2
      // )
      )
    {
      console.log("GHOST Collided Below");
      this.collide = true;
      // return this.collide;
    }

    return this.collide;
  }

  updatePosition() 
  {

    // this.map[mapCords[0]][mapCords[1]] = 3;
    // const displayPac = document.getElementById(`${mapCords[0]}-${mapCords[1]}`);
    // const image = document.createElement('img');
    // image.src = "./images/red-ghost-running.gif";
    // image.classList.add('red-ghost');
    // displayPac.appendChild(image);
    


    // if(prevCords[0] !== 0 && prevCords[1] !== 0)
    // {
    //    this.map[prevCords[0]][prevCords[1]] = 0;
    //    const removeGhost = document.getElementById(`${prevCords[0]}-${prevCords[1]}`);
    //    const image = removeGhost.querySelector('img');
    //    console.log(removeGhost);
    //    removeGhost.removeChild(image);

    // }

    this.map[this.currentPosition[0]][this.currentPosition[1]] = 3;
    const displayPac = document.getElementById(`${this.currentPosition[0]}-${this.currentPosition[1]}`);
    const image = document.createElement('img');
    image.src = "./images/red-ghost-running.gif";
    image.classList.add('red-ghost');
    displayPac.appendChild(image);
    
    if(this.prevPosition)
    {
       this.map[this.prevPosition[0]][this.prevPosition[1]] = 0;
       const removeGhost = document.getElementById(`${this.prevPosition[0]}-${this.prevPosition[1]}`);
       const image = removeGhost.querySelector('img');
      //  console.log(removeGhost);
       removeGhost.removeChild(image);
     

    }
    this.prevPosition = [...this.currentPosition];
  }

}