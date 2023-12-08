class CreateMap
{
  constructor()
  {
    this.map = 
    [
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
      [8,1,8,8,8,1,8,8,8,1,8,1,8,8,8,1,8,8,8,1,8],
      [8,1,8,11,1,1,8,8,8,1,8,1,8,8,8,1,1,11,8,1,8],
      [8,1,8,1,8,1,8,1,1,1,1,1,1,1,8,1,8,1,8,1,8],
      [8,1,1,1,8,1,1,1,8,8,8,8,8,1,1,1,8,1,1,1,8],
      [8,1,8,1,1,1,8,1,1,1,8,1,1,1,8,1,1,1,8,1,8],
      [8,1,8,8,1,8,8,8,8,1,8,1,8,8,8,8,1,8,8,1,8],
      [8,1,1,1,1,8,1,1,1,1,1,1,1,1,1,8,1,1,1,1,8],
      [8,1,8,8,1,8,1,8,8,8,0,8,8,8,1,8,1,8,8,1,8],
      [8,1,1,1,1,1,1,8,0,0,0,0,0,8,1,1,1,1,1,1,8],
      [8,1,8,8,8,8,1,8,8,8,8,8,8,8,1,8,8,8,8,1,8],
      [8,1,1,1,8,8,1,1,1,1,1,1,1,1,1,8,8,1,1,1,8],
      [8,1,8,1,1,1,1,8,1,8,8,8,1,8,1,1,1,1,8,1,8],
      [8,1,8,8,8,8,1,8,1,1,8,1,1,8,1,8,8,8,8,1,8],
      [8,1,1,1,8,1,1,8,8,1,8,1,8,8,1,1,8,1,1,1,8],
      [8,1,8,1,8,1,8,8,8,1,1,1,8,8,8,1,8,1,8,1,8],
      [8,1,8,11,1,1,1,1,8,8,1,8,8,1,1,1,1,11,8,1,8],
      [8,1,8,8,8,8,8,1,8,8,1,8,8,1,8,8,8,8,8,1,8],
      [8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]

    ];
    this.pointsCount = 0;
    this.gameWon = 0;
    // this.wall = 8;
    // this.food = 1;
    // this.start = 11;
    // this.pacMan = 2;
    // this.redGhost = 3;
    // this.blueGhost = 4;
    // this.orangeGhost = 5;
  }

  displayMap()
  {
    // console.log("diplayMap called - map js");
    let mapBoard = document.getElementById('map-container');

    for(let row = 0; row < this.map.length; row++)
    {
      for(let col = 0; col < this.map[row].length; col++)
      {
        let mapBlock = document.createElement('div');
        mapBlock.className = 'map-block';
        mapBlock.setAttribute('id',`${row}-${col}`);
        mapBlock.style.left = col * 40 +'px'
        mapBlock.style.top = row * 40 + 'px'
        if (this.map[row][col] === 8)
        {
          mapBlock.style.backgroundColor = 'blue';
          mapBlock.classList.add('map-wall-block');
        } 
        else if (this.map[row][col] === 2) 
        {
          const image = document.createElement('img');
          image.src = "./images/pac-man-eating.gif";
          image.classList.add('pac-man');
          mapBlock.appendChild(image);
        } 
        else if (this.map[row][col] === 1)
        {
          mapBlock.classList.add('map-dot-block');
        }
        else if (this.map[row][col] === 11)
        {
          // this.pointsCount++;
          mapBlock.classList.add('star');
        }
        mapBoard.appendChild(mapBlock);
      }
    }
    // console.log(`Total Point to obtain: ${this.pointsCount}`);
  }

  getMap()
  {
    return this.map;
  }

  searchMap()
  {
    this.pointsCount = 0;
    for(let row = 0; row < this.map.length; row++)
      {
        for(let col = 0; col < this.map[row].length; col++)
        {
          if(this.map[row][col] === 1){
           this.pointsCount += 1;
          }
        }
      }
      if(this.pointsCount === 0)
      {
        this.gameWon = 1;
      }
    
  }


}






// console.log("Maps - End");