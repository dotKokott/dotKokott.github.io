function init() {

}

var bgColor = 'rgba(0, 0, 0, 0.9)';
function draw(dt) {
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const GRID_X = 30;
  const GRID_Y = 30;
  for(var x = 0; x < WIDTH / GRID_X; x++) {
    for(var y = 0; y < HEIGHT / GRID_Y; y++) {
      var posX = x * GRID_X;
      var posY = y * GRID_Y;

      var radius = Math.abs(Math.cos(x - totalSeconds) * 20 * Math.sin(y - totalSeconds));
      var color = HSLA(0, radius * 20);
      //strokeCircle(posX, posY, radius, 2, color);
      fillCircle(posX, posY, radius, color);
    }
  }
}
