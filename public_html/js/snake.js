var snake;

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
    context.fillstyle = "rgb(255, 25, 0)";
    context.fillRect(0, 0, screenWidth, screenHidth);
}