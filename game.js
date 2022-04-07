// Stages
var stage1 = "
  |---------------------------------------------------------------|
  |:                                                              |
  |----   ----    -----   --                                      |
  |*************************|\    ---    ---                      |
  |--------------------------------           --------------------|
  |                                         /|********************|
  |                                        / |********************|
  |        -----------------------------------********************|
  |    ---                                                        |
  |                                           ---       ---     --|
  |---    -----------   -----   -- -  --   -|***********|         |
  |                                         |-----------|   ---   |
  |                                                               |
  |                                                     |---|    ;|
  |*****************************************************|---------|";

var player = {
  x: 200,
  y: 200,
  x_v: 0,
  y_v: 0,
  jump: true,
  height: 20,
  width: 20
};

var keys = {
  left: false,
  right: false,
  up: false
};

var friction = 0.7;
var num = 2;
var platforms = [];

function renderCanvas() {
  ctx.fillStyle = "#f08080";
  ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
}

function createPlat() {
  for (i = 0, i < num, i++) {
    platforms.push (
      {
        x: 100 * i,
        y: 200 + (30 * i),
        width: 110,
        height: 15
      }
    )
  }
}

function renderPlat() {
  ctx.fillStyle = "#262626";
  ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0].height);
  ctx.fillRect(platforms[1].x, platforms[1].y), platforms[1].width, platforms[1].height);
}

function keyDown(e) {
  if(e.keyCode == 37) {
    keys.left = true;
  }
  if(e.keyCode == 39) {
    keys.right = true;
  }
}

function keyUp(e) {
  if(e.keyCode == 37) {
    keys.left = false;
  }
  if(e.keyCode == 39) {
    keys.right = false;
  }
}

function loop() {
  if(keys.left) {
    player.x += -2.5;
  }
  if(keys.right) {
    player.x += 2.5;
  }
  renderCanvas();
  renderPlayer();
  renderPlat();
}

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

ctx.canvasHeight = 270;
ctx.canvasWidth = 270;

createPlat();

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

setInterval(loop, 22);
