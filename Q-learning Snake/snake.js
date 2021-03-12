/* GAME VARIABLES */
const MAP = 400;
const DOT_SIZE = 40;
const TABLE_SIZE = MAP/DOT_SIZE

const FRAME = 6;

let snakeLenght = 3;
let foodCoordinates = [-1, -1];
let snakeCoordinates = [3, 3];

let board = new Array(TABLE_SIZE).fill(0).map(() => new Array(TABLE_SIZE).fill(0));
let move = 0;

let bestScore = 0;

function setup(){
    createCanvas(MAP, MAP);
    frameRate(FRAME);
    setDotGameBoard();
}

function draw(){
    background(20);
    let collisionDetected = drawGameFrame();
    if (collisionDetected) restartGame();
}

function keyPressed() {
    if(keyCode === LEFT_ARROW) {
        move = 3;
    }else if(keyCode === RIGHT_ARROW) {
        move = 2;
    }else if(keyCode === UP_ARROW) {
        move = 1;
    }else if(keyCode === DOWN_ARROW) {
        move = 0;
    }
}

function drawGameFrame() {
    const SNAKE_COLOR = color(255, 0, 0);
    const FOOD = color(0, 200, 0);

    collision = snakeGameBoardLogic();
    for(i=0;i<board.length;i++) {
        for(j=0;j<board.length;j++) {
            if(board[i][j] == -1) {
                fill(FOOD);
                rect(DOT_SIZE*j, DOT_SIZE*i, DOT_SIZE, DOT_SIZE);
            } else if(board[i][j] > 0) {
                fill(SNAKE_COLOR);
                rect(DOT_SIZE*j, DOT_SIZE*i, DOT_SIZE, DOT_SIZE);
            }
        }
    }
    return collision;
}