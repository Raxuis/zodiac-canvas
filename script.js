let myCanvas = document.getElementById('myCanvas');

let ctx = myCanvas.getContext("2d");

/* // TRAIT HORIZONTAL ROUGE
for (let i = 0; i < 600; i += 10) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.strokeStyle = 'red';
    ctx.lineTo(600, i);
    ctx.stroke();
}
// TRAIT VERTICAL ROUGE
for (let i = 0; i < 600; i += 10) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.strokeStyle = 'red';
    ctx.lineTo(i, 600);
    ctx.stroke();
}
// TRAIT VERTICAL VERT
for (let i = 0; i < 600; i += 100) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.strokeStyle = 'green';
    ctx.lineTo(i, 600);
    ctx.stroke();
}
// TRAIT HORIZONTAL vert
for (let i = 0; i < 600; i += 100) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.strokeStyle = 'green';
    ctx.lineTo(600, i);
    ctx.stroke();
} */
ctx.shadowColor = 'black'; // couleur ombrage
ctx.shadowOffsetX = -5;
ctx.shadowOffsetY = -5;
ctx.shadowBlur = 10;
ctx.beginPath();
ctx.moveTo(80, 210);
ctx.strokeStyle = '#000';
ctx.lineWidth = 4;
ctx.lineTo(160, 210);
ctx.lineTo(80, 290);
ctx.lineTo(160, 290);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = '#000';
ctx.arc(230, 250, 42.5, 0 * Math.PI / 180, 360 * Math.PI / 180);
ctx.strokeStyle = 'red';
ctx.closePath();
ctx.stroke();


ctx.beginPath();
ctx.moveTo(170, 250);
ctx.strokeStyle = '#000';
ctx.lineTo(290, 250);
ctx.lineWidth = 4;
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230, 150);
ctx.strokeStyle = '#000';
ctx.lineTo(230, 350);
ctx.lineWidth = 4;
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = '#000';
ctx.arc(300, 250, 42.5, -90 * Math.PI / 180, -270 * Math.PI / 180);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(380, 205);
ctx.strokeStyle = '#000';
ctx.lineWidth = 4;
ctx.lineTo(380, 295);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(410, 295);
ctx.strokeStyle = '#000';
ctx.lineTo(450, 205);
ctx.lineTo(490, 295);
ctx.lineWidth = 4;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 245);
ctx.strokeStyle = '#000';
ctx.lineTo(468, 245);
ctx.lineWidth = 4;
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = '#000';
ctx.arc(560, 250, 42.5, 90 * Math.PI / 180, 270 * Math.PI / 180);
ctx.stroke();

ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.shadowColor = "transparent";

ctx.beginPath();
ctx.moveTo(550, 595);
ctx.strokeStyle = '#000';
ctx.lineTo(550, 565);
ctx.lineTo(570, 565);
ctx.lineTo(550, 580);
ctx.lineTo(570, 595);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = '#000';
ctx.arc(580, 595, 2.5, 0 * Math.PI / 180, 360 * Math.PI / 180);
ctx.closePath();
ctx.fill();