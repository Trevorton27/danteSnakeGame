const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// let snakePositionX = 100;
// let snakePositionY = 50;
let snakeSpeedX = 10;

let applePositionX = 180;
let applePositionY = 100;
let snakeDirection;
let directionX = 10;
let directionY = 10;

const snake = [
  {
    x: 50,
    y: 50
  }
];

function drawSnakePart(snake) {
  // ctx.beginPath();
  ctx.fillStyle = '#90EE90';
  ctx.fillRect(snake.x, snake.y, 7, 7);

  ctx.strokeRect(snake.x, snake.y, 7, 7);
  // ctx.closePath;
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function drawApple() {
  // ctx.beginPath();
  ctx.arc(applePositionX, applePositionY, 2, 0, Math.PI * 2);
  ctx.fillStyle = '#FF0000';
  ctx.fill();
  //ctx.closePath;
}

function keyDownHandler(e) {
  e.preventDefault();
  switch (e.key) {
    //left
    case 'ArrowLeft':
      snakeDirection = 'left';
      return;
    //up
    case 'ArrowUp':
      snakeDirection = 'up';
      return;
    //right
    case 'ArrowRight':
      snakeDirection = 'right';
      return;
    //down
    case 'ArrowDown':
      snakeDirection = 'down';
      return;
    default:
      console.log('I no worky');
  }
}
//console.log('snake: ', snake);
document.addEventListener('keydown', keyDownHandler);
function moveSnake() {
  snakeDirection = 'right';
  const snakeCopy = [];

  for (var i = 0; i < snake.length; i++) {
    snakeCopy.push({
      x: snake[i].x,
      y: snake[i].y
    });
    //console.log('snakeCopy: ', snakeCopy);
  }
  for (var i = 0; i < snake.length; i++) {
    if (i === 0) {
      if ((snakeDirection = 'right')) {
        snake[i].x += directionX;
      }
      if ((snakeDirection = 'left')) {
        snake[i].x -= directionX;
      }
      if ((snakeDirection = 'up')) {
        snake[i].y -= directionY;
      }
      if ((snakeDirection = 'down')) {
        snake[i].y += directionY;
      }
    } else {
      snake[i].x = snakeCopy[i - 1].x;
      snake[i].y = snakeCopy[i - 1].y;
    }
  }
  console.log('moveSnake function is firing');
}

function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSnake();
  moveSnake();
  drawApple();
}

setInterval(startGame, 1000);

// if (
//   snake.x + snakeSpeedirectionX === canvas.width ||
//   snake.x + snakeSpeedX < 0
// ) {
//   snakeSpeedX = -snakeSpeedX;
// }
// if (snake.y + snakeSpeedY === canvas.height || snake.y + snakeSpeedY < 0) {
//   snakeSpeedY = -snakeSpeed;
// }

// function moveSnake() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawSnake();
//   drawApple();
//   if (snake.x + snakeSpeedX === canvas.width || snakePositionX + snakeSpeedX < 0 ) {
//     snakeSpeedX = -snakeSpeedX
//   };
//   snakePositionX += snakeSpeedX
//   if (snakePositionY + snakeSpeedY === canvas.height ||snake.y + snakeSpeedY < 0){
//     snakeSpeedY = -snakeSpeedY
//   };
//   snakePositionY += snakeSpeedY
// }
// setInterval(moveSnake, 100);
