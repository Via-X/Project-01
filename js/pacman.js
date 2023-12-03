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
    // this.position = map[19][10];
     
  }

  move() 
  {

    switch (this.directionX) 
    {
      case -1:
        // console.log("Move Left - Pacman");
        if(this.map[this.currentPosition[0]][this.currentPosition[1]-1] === 0)
        {
          this.directionX = 0;
          this.directionY = 0;

          // this.projectedPosition[0] = this.currentPosition[0];
          // this.projectedPosition[1] = this.currentPosition[1] -1;
          // console.log(this.currentPosition + "MOVE PACEMANJS");
          if(this.didCollide())
          {
            console.log("PACMAN - COLLIDE");
            this.game.reset();
            // return true;
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
        // console.log("Move Right - Pacman");
        if(this.map[this.currentPosition[0]][this.currentPosition[1]+1] === 0)
        {
          this.directionX = 0;
          this.directionY = 0;

          // this.projectedPosition[0] = this.currentPosition[0];
          // this.projectedPosition[1] = this.currentPosition[1] + 1;
          // console.log(this.currentPosition + "MOVE PACEMANJS");
          if(this.didCollide())
          {
            console.log("PACMAN - COLLIDE");
            this.game.reset();
            // return true;
          } else 
          {
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
        // console.log("Move UP - Pacman");
        if(this.map[this.currentPosition[0]-1][this.currentPosition[1]] === 0)
        {
          this.directionX = 0;
          this.directionY = 0;

          // this.projectedPosition[1] = this.currentPosition[1];
          // this.projectedPosition[0] = this.currentPosition[0] -1;
          // console.log(this.currentPosition + "MOVE PACEMANJS");
          if(this.didCollide())
          {
            console.log("PACMAN - COLLIDE");
            this.game.reset();
            // return true;
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
        // console.log("Move Down - Pacman");
        if(this.map[this.currentPosition[0]+1][this.currentPosition[1]] === 0)
        {
          this.directionX = 0;
          this.directionY = 0;

          // this.projectedPosition[1] = this.currentPosition[1];
          // this.projectedPosition[0] = this.currentPosition[0] + 1;
          // console.log(this.currentPosition + "MOVE PACEMANJS");
          if(this.didCollide())
          {
            console.log("PACMAN - COLLIDE");
            this.game.reset();
            // return true;
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
        this.map[this.currentPosition[0]][this.currentPosition[1] - 1] === 3 //|| 
        // this.map[this.currentPosition[0]][this.currentPosition[1] - 1] === 6 || 
        // this.map[this.currentPosition[0]][this.currentPosition[1] - 1] === 9 
        // (
        //   this.currentPosition[0] < 21 && 
        //   this.currentPosition[0] >= 0 &&  
        //   this.currentPosition[1] - 3 < 21 && 
        //   this.currentPosition[1] - 3 >= 0 && 
        //   this.map[this.currentPosition[0]][this.currentPosition[1] - 2] === 3
          
        // ) || 
        // (
        //   this.currentPosition[0] < 21 && 
        //   this.currentPosition[0] >= 0 &&  
        //   this.currentPosition[1] - 3 < 21 && 
        //   this.currentPosition[1] - 3 >= 0 && 
        //   this.map[this.currentPosition[0]][this.currentPosition[1] - 2] === 6
      
        // ) || 
        // (
        //   this.currentPosition[0] < 21 && 
        //   this.currentPosition[0] >= 0 &&  
        //   this.currentPosition[1] - 3 < 21 && 
        //   this.currentPosition[1] - 3 >= 0 && 
        //   this.map[this.currentPosition[0]][this.currentPosition[1] - 2] === 9
        // ) 
      )
    {
      console.log("PAC Collided Left");
      this.collide = true;
      // return this.collide;
    }

    //Check Block to the Right
    if(
        this.map[this.currentPosition[0]][this.currentPosition[1] + 1] === 3 //||
        // this.map[this.currentPosition[0]][this.currentPosition[1] + 1] === 6 ||
        // this.map[this.currentPosition[0]][this.currentPosition[1] + 1] === 9 
        // (
        //   this.currentPosition[0] < 21 && 
        //   this.currentPosition[0] >= 0 &&  
        //   this.currentPosition[1] + 3 < 21 && 
        //   this.currentPosition[1] + 3 >= 0 && 
        //   this.map[this.currentPosition[0]][this.currentPosition[1] + 2] === 3
        // ) ||
        // (
        //   this.currentPosition[0] < 21 && 
        //   this.currentPosition[0] >= 0 &&  
        //   this.currentPosition[1] + 3 < 21 && 
        //   this.currentPosition[1] + 3 >= 0 && 
        //   this.map[this.currentPosition[0]][this.currentPosition[1] + 2] === 6
        // ) || 
        // (
        //   this.currentPosition[0] < 21 && 
        //   this.currentPosition[0] >= 0 &&  
        //   this.currentPosition[1] + 3 < 21 && 
        //   this.currentPosition[1] + 3 >= 0 && 
        //   this.map[this.currentPosition[0]][this.currentPosition[1] + 2] === 9
        // )
      )
    {
      console.log("PAC Collided Right");
      this.collide = true;
      // return this.collide;
    }

    //Check Block Above
    if(
        this.map[this.currentPosition[0] - 1][this.currentPosition[1]] === 3 //||
        // this.map[this.currentPosition[0] - 1][this.currentPosition[1]] === 6 ||
        // this.map[this.currentPosition[0] - 1][this.currentPosition[1]] === 9 
        // ( 
        //   this.currentPosition[0] - 3 < 21 && 
        //   this.currentPosition[0] - 3 >= 0 &&  
        //   this.currentPosition[1] < 21 && 
        //   this.currentPosition[1] >= 0 && 
        //   this.map[this.currentPosition[0] - 2][this.currentPosition[1]] === 3
        // ) ||
        // (
        //   this.currentPosition[0] - 3 < 21 && 
        //   this.currentPosition[0] - 3 >= 0 &&  
        //   this.currentPosition[1] < 21 && 
        //   this.currentPosition[1] >= 0 && 
        //   this.map[this.currentPosition[0] - 2][this.currentPosition[1]] === 6  
        // ) ||
        // (
        //   this.currentPosition[0] - 3 < 21 && 
        //   this.currentPosition[0] - 3 >= 0 &&  
        //   this.currentPosition[1] < 21 && 
        //   this.currentPosition[1] >= 0 && 
        //   this.map[this.currentPosition[0] - 2][this.currentPosition[1]] === 9
        // )
      )
    {
      console.log("PAC Collided Above");
      this.collide = true;
      // return this.collide;
    }

    //Check Block Below
    if(
        this.map[this.currentPosition[0] + 1][this.currentPosition[1]] === 3 //||
        // this.map[this.currentPosition[0] + 1][this.currentPosition[1]] === 6 ||
        // this.map[this.currentPosition[0] + 1][this.currentPosition[1]] === 9 
        // (
        //   this.currentPosition[0] + 3 < 21 && 
        //   this.currentPosition[0] + 3 >= 0 &&  
        //   this.currentPosition[1] < 21 && 
        //   this.currentPosition[1] >= 0 && 
        //   this.map[this.currentPosition[0] + 2][this.currentPosition[1]] === 3
        // ) ||
        // (
        //   this.currentPosition[0] + 3 < 21 && 
        //   this.currentPosition[0] + 3 >= 0 &&  
        //   this.currentPosition[1] < 21 && 
        //   this.currentPosition[1] >= 0 && 
        //   this.map[this.currentPosition[0] + 2][this.currentPosition[1]] === 6
        // ) ||
        // (
        //   this.currentPosition[0] + 3 < 21 && 
        //   this.currentPosition[0] + 3 >= 0 &&  
        //   this.currentPosition[1] < 21 && 
        //   this.currentPosition[1] >= 0 && 
        //   this.map[this.currentPosition[0] + 2][this.currentPosition[1]] === 9
        // ) 
      )
    {
      console.log("PAC Collided Below");
      this.collide = true;
      // return this.collide;
    }

    return this.collide;
  }

  updatePosition() 
  {
 
    // this.map[mapCords[0]][mapCords[1]] = 2;
    // const displayPac = document.getElementById(`${mapCords[0]}-${mapCords[1]}`);
    // const image = document.createElement('img');
    // image.src = "./images/pac-man-eating.gif";
    // image.classList.add('pac-man');
    // displayPac.appendChild(image);

    // if(prevCords[0] !== 0 && prevCords[1] !== 0)
    // {
    //    this.map[prevCords[0]][prevCords[1]] = 0;
    //    const removePac = document.getElementById(`${prevCords[0]}-${prevCords[1]}`);
    //    const image = removePac.querySelector('img');
    //    console.log(removePac);
    //    removePac.removeChild(image);

    // }

    this.map[this.currentPosition[0]][this.currentPosition[1]] = 2;
    const displayPac = document.getElementById(`${this.currentPosition[0]}-${this.currentPosition[1]}`);
    const image = document.createElement('img');
    image.src = "./images/pac-man-eating.gif";
    image.classList.add('pac-man');
    displayPac.appendChild(image);
   

    if(this.prevPosition)
    {
       this.map[this.prevPosition[0]][this.prevPosition[1]] = 0;
       const removePac = document.getElementById(`${this.prevPosition[0]}-${this.prevPosition[1]}`);
       const image = removePac.querySelector('img');
      //  console.log(removePac);
       removePac.removeChild(image);



    }
    this.prevPosition = [...this.currentPosition];
  }

}