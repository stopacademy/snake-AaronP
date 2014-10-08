var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHidth;

gameInitilalize();
gameDraw();

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
    context.fillStyle = "rgb(196, 186, 10)";
    context.fillRect(0, 0, screenWidth, screenHidth);
}

function snakeInitilalize() {
    snake = [];
    snakeLenght = 15;
    snakeSize = 20;
    
    for(var index = 0; index < snakeLength; index++){
        snake.push();
    }
}

function snakeDraw() {
    
}

function snakeUpdate() {
    
}