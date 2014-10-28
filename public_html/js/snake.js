/*----------------------------------------------------------------------------
 * variables
 * ---------------------------------------------------------------------------
 */

var snake;
var snakeLength;
var snakeSize;
var snakeDirection;

var food;

var context;
var screenWidth;
var screenHeight;

var gameState;
var gameOverMenu;

/*----------------------------------------------------------------------------
 * Executing Game Code
 * ---------------------------------------------------------------------------
 */

gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000 / 60);

/*----------------------------------------------------------------------------
 * Game Function
 * ---------------------------------------------------------------------------
 */

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;

    document.addEventListener("keydown", keyboardHandler);
    
    gameOverMenu = document.getElementById("gameOver");

    setState("PLAY");
}

function gameLoop() {
    gameDraw();
    if (gameState === "PLAY") {
        snakeUpdate();
        snakeDraw();
        foodDraw();
    }
}

function gameDraw() {
    context.fillStyle = "rgb(36, 133, 1)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

/*----------------------------------------------------------------------------
 * Snake Function
 * ---------------------------------------------------------------------------
 */

function snakeInitialize() {
    snake = [];
    snakeLength = 1;
    snakeSize = 10;
    snakeDirection = "Moise";

    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push({x: index, y: 0});

    }
}

function snakeDraw() {
    for (var index = 0; index < snake.length; index++) {
        context.fillStyle = "black";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}

function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;

    if (snakeDirection === "down") {
        snakeHeadY++;
    }
    if (snakeDirection === "right") {
        snakeHeadX++;
    }
    if (snakeDirection === "left") {
        snakeHeadY--;
    }
    if (snakeDirection === "up") {
        snakeHeadX--;
    }


    checkFoodCollision(snakeHeadX, snakeHeadY);
    checkWallCollision(snakeHeadX, snakeHeadY);

    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}

/*----------------------------------------------------------------------------
 * Food Function
 * ---------------------------------------------------------------------------
 */

function foodInitialize() {
    food = {
        x: 0,
        y: 0
    };
    setFoodPosition();
}

function foodDraw() {
    context.fillStyle = "yellow";
    context.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
}

function setFoodPosition() {
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    food.x = Math.floor(randomX / snakeSize);
    food.y = Math.floor(randomY / snakeSize);
}

/*----------------------------------------------------------------------------
 * Input Function
 * ---------------------------------------------------------------------------
 */

function keyboardHandler(event) {
    console.log(event);

    if (event.keyCode == "39" && snakeDirection !== "up") {
        snakeDirection = "right";
    }
    else if (event.keyCode == "40" && snakeDirection !== "left") {
        snakeDirection = "down";
    }
    else if (event.keyCode == "38" && snakeDirection !== "down") {
        snakeDirection = "left";
    }
    else if (event.keyCode == "37" && snakeDirection !== "right") {
        snakeDirection = "up";
    }
}

/*----------------------------------------------------------------------------
 * Collection  Handling
 * ---------------------------------------------------------------------------
 */

function checkFoodCollision(snakeHeadX, snakeHeadY) {
    if (snakeHeadX === food.x && snakeHeadY === food.y) {
        snake.push({
            x: 0,
            y: 0
        });
        snakeLength++;
    }
}

function checkWallCollision(snakeHeadX, snakeHeadY) {
    if (snakeHeadX * snakeSize >= screenWidth || snakeHeadX * snakeSize < 0) {
        setState("GAME OVER");
    }
}

/*----------------------------------------------------------------------------
 * Game State Handling
 * ---------------------------------------------------------------------------
 */

function setState(state) {
    gameState = state;
    showMenu(state);
}

function displayMenu(menu) {
    menu.style.visibility = "visable";
}

function showMenu(state) {
    if(state = "GAME OVER") {
        displayMenu(gameOverMenu);
    }
}