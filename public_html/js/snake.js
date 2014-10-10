var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHidth;

gameInitilalize();
snakeInitialize();
gameDraw();
snakeDraw();

function gameInitilalize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHidth = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.hidth = screenHidth;
}

function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle = "rgb(36, 133, 1)";
    context.fillRect(0, 0, screenWidth, screenHidth);
}

function snakeInitialize() {
    snake = [];
    snakeLenght = 5;
    snakeSize = 20;
    
    for(var index = 0; index < snakeLength; index++){
        snake.push( {
                x: index,
                y: 0
       });

    }
}

function snakeDraw() {
         for( var index = 0; index < snake.length; index++) {
         context.fillStyle = "red";
         context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize, snakeSize);
        }
}

function snakeUpdate() {
    
}