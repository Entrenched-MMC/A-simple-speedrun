const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

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
  ctx.fillRect(platform[0].x, platform[0].y, platform[0].width, platform[0].height);
  ctx.fillRect(platform[1].x, platform[1].y)
}

function CreateStage(StageNum) {
  
}

function GameStart() {
  CreateStage('stage-1');
}
