import KeyboardControls from "./KeyboardControls";
const canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;

const ctx = canvas.getContext("2d");
const { width: w, height: h } = ctx.canvas;
document.getElementById("board").appendChild(canvas);
let t = 0;
let dt = 0;
let timeOfLastFrame = 0;

const controls = new KeyboardControls();
let playerX = 0;
let playerY = 0;
let playerSpeed = 500;

function loop(ms) {
  requestAnimationFrame(loop);
  t = ms / 1000;
  dt = t - timeOfLastFrame;
  timeOfLastFrame = t;

  playerX += controls.x * playerSpeed * dt;
  playerY += controls.y * playerSpeed * dt;

  ctx.fillStyle = "tomato";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "lightgreen";
  ctx.fillRect(playerX, playerY, 50, 50);
}

requestAnimationFrame(loop);
