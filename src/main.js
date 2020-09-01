import KeyboardControls from "./KeyboardControls";
import MouseControls from "./MouseControls";
const canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;

const ctx = canvas.getContext("2d");
const { width: w, height: h } = ctx.canvas;
document.getElementById("board").appendChild(canvas);

const keyboardControls = new KeyboardControls();
const mouseControls = new MouseControls(canvas);
let controls = keyboardControls;
let playerX = 0;
let playerY = 0;
let playerSpeed = 500;

canvas.addEventListener("mouseenter", () => {
  console.log("mouse controls active");
  controls = mouseControls;
});

canvas.addEventListener("mouseleave", () => {
  console.log("keyboard controls active");
  controls = keyboardControls;
});

let t = 0;
let dt = 0;
let timeOfLastFrame = 0;
function loop(ms) {
  requestAnimationFrame(loop);
  t = ms / 1000;
  dt = t - timeOfLastFrame;
  timeOfLastFrame = t;

  if (controls?.position === undefined) {
    playerX += controls.x * playerSpeed * dt;
    playerY += controls.y * playerSpeed * dt;
  } else {
    playerX = mouseControls.position.x;
    playerY = mouseControls.position.y;
    controls.update();
  }

  ctx.fillStyle = "tomato";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "lightgreen";
  ctx.fillRect(playerX, playerY, 50, 50);
}

requestAnimationFrame(loop);
