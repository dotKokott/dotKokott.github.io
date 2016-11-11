function drawLine(aX, aY, bX, bY, width) {
    ctx.beginPath();
    ctx.moveTo(aX, aY);
    ctx.lineTo(bX, bY);
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
}

function strokeCircle(x, y, radius, width, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}

function fillCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function fillHeart(color) {
  ctx.fillStyle = color || 'red';

  ctx.beginPath();
  ctx.moveTo(75,40);
  ctx.bezierCurveTo(75,37,70,25,50,25);
  ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
  ctx.bezierCurveTo(20,80,40,102,75,120);
  ctx.bezierCurveTo(110,102,130,80,130,62.5);
  ctx.bezierCurveTo(130,62.5,130,25,100,25);
  ctx.bezierCurveTo(85,25,75,37,75,40);
  ctx.fill();
}
