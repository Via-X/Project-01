window.onload = function () 
{
  const startButton = document.getElementById("start-button");
  // const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () 
  {
    startGame();
  });

  // restartButton.addEventListener("click", function () {
  //   // Call the restartGame function when the button is clicked
  //   restartGame();
  // });

  function startGame() 
  {
    // console.log("start game - script js");
    game = new Game();
    game.start();

  }

  // The function that reloads the page to start a new game
 

  // Function that handles keydown event
  function handleKeydown(event) 
  {
    const key = event.key;
    const possibleKeystrokes = 
    [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) 
    {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) 
      {
        case "ArrowLeft":
          // console.log("Left Hit");
          game.player.directionX = -1
          break;
        case "ArrowUp":
          // console.log("Up Hit");
          game.player.directionY = -1 
          break;
        case "ArrowRight":
          // console.log("Right Hit");
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          // console.log("Down Hit");
          game.player.directionY = 1;
          // game.endGame();
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};