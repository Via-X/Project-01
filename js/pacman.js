class Player {
  constructor(map) 
  {
    this.map = map;
    // this.position = map[19][10];
     
  }

  move(direction) 
  {

  }

  didCollide(obstacle) 
  {

  }

  updatePosition(mapCords,prevCords) 
  {
    console.log(mapCords);
    console.log(this.map);
    this.map[mapCords[0]][mapCords[1]] = 2;
    const displayPac = document.getElementById(`${mapCords[0]}-${mapCords[1]}`);
    console.log(displayPac);
    const image = document.createElement('img');
    image.src = "./images/pac-man-eating.gif";
    image.classList.add('pac-man');
    displayPac.appendChild(image);
    


    // if(prevCords)
    // {
    //    this.map[prevCords[0]][prevCords[1]] = 0;
    //    const removePac = document.getElementById(`${prevCords[0]}-${prevCords[1]}`);
    //    const image = removePac.querySelector('img');
    //    console.log(removePac);
    //    removePac.removeChild(image);

    // }

  }

}