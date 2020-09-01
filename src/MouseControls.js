class MouseControls {
  constructor(canvasEl) {
    if (canvasEl.tagName != "CANVAS") {
      throw Error(
        "You have to pass in a canvas element into the MouseControls Constructor"
      );
    }
    this.canvasEl = canvasEl;
    this.pressed = false;
    this.released = false;
    this.isDown = false;
    this.position = { x: 0, y: 0 };

    document.addEventListener(
      "mousedown",
      (e) => this.handleMousedown(e),
      false
    );
    document.addEventListener("mouseup", (e) => this.handleMouseup(e), false);
    document.addEventListener(
      "mousemove",
      (e) => this.handleMousemove(e),
      false
    );
  }

  handleMousedown(e) {
    this.pressed = true;
    this.isDown = true;
  }

  handleMouseup(e) {
    this.released = true;
    this.isDown = false;
  }

  update() {
    this.released = false;
    this.pressed = false;
  }

  handleMousemove(e) {
    this.getMousePositionFromEvent(e);
  }

  getMousePositionFromEvent({ clientX, clientY }) {
    const { position, canvasEl } = this;
    const rect = canvasEl.getBoundingClientRect();
    const xRatio = canvasEl.width / canvasEl.clientWidth;
    const yRatio = canvasEl.height / canvasEl.clientHeight;

    position.x = (clientX - rect.left) * xRatio;
    position.y = (clientY - rect.top) * yRatio;
  }
}

export default MouseControls;
