class CreateMap
{
  constructor()
  {
    this.map = 
    [
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
      [8,0,8,8,8,0,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,8,0,0,0,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,8,0,8,0,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,0,0,8,0,0,0,0,0,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,8,8,8,8,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,8],
      [8,0,8,0,8,0,8,8,8,8,0,8,8,8,8,0,8,8,8,0,8],
      [8,0,8,0,8,0,8,0,0,0,0,0,0,0,8,0,8,8,8,0,8],
      [8,0,0,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,0,0,8],
      [8,0,8,8,8,0,8,0,0,0,0,0,0,0,8,0,8,8,8,0,8],
      [8,0,8,8,8,0,8,8,8,8,8,8,8,8,8,0,8,8,8,0,8],
      [8,0,8,8,8,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,8],
      [8,0,8,8,8,8,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,8,8,8,8,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,8,8,8,8,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,8,8,8,8,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,8,8,8,8,8,8,8,8,0,8,8,8,8,8,8,8,8,0,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]

    ];

    // this.wall = 8;
    // this.food = 1;
    // this.pacMan = 2;
    // this.redGhost = 3;
    // this.blueGhost = 6;
    // this.orangeGhost = 9;
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
          
          // const image = document.createElement('img');
          // image.src = "./images/pac-man-right.png";
          // mapBlock.appendChild(image);
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
        mapBoard.appendChild(mapBlock);
      }
    }
  }

  getMap()
  {
    return this.map;
  }

}





// console.log("Maps - End");