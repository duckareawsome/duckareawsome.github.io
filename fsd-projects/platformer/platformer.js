
$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      toggleGrid()


    // TODO 2 - Create Platforms
createPlatform(800, 300, 200, 29,"black");
createPlatform(300, 600, 134, 00, "light blue");
createPlatform(500, 500, 134, 00, "pink");
createPlatform(670, 400, 134, 00, "blue")
createPlatform(100, 700, 130, 50, "gray")
    // TODO 3 - Create Collectables
createCollectable("steve", 800, 200);
createCollectable("diamond", 200, 170, 1, 1);
createCollectable("squirtle", 200, 300,1, 1);


    
    // TODO 4 - Create Cannons
createCannon("left", 200, 4000);
createCannon("right", 200, 100);
createCannon("bottom", 800, 000);
 createCannon("right", 800, 000);   
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
