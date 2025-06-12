
let modo = 'campo';

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("canvas-container");
}

function draw() {
  background(135, 206, 235);

  if (modo === 'campo') {
    desenharCampo();
  } else if (modo === 'cidade') {
    desenharCidade();
  } else {
    desenharCampo();
    desenharCidade();
  }

  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Modo atual: " + modo.toUpperCase(), width / 2, 30);
}

function setModo(novoModo) {
  modo = novoModo;
}

function desenharCampo() {
  fill(34, 139, 34);
  rect(0, height * 0.7, width / 2, height * 0.3);

  fill(255, 204, 0);
  ellipse(80, 80, 80);

  drawTree(100, 300);
  drawTree(200, 320);
  stroke(0);
  drawBird(120, 100);
  drawBird(180, 120);
}

function desenharCidade() {
  fill(50);
  rect(width / 2, height * 0.75, width / 2, height * 0.25);

  fill(180);
  rect(width / 2, height * 0.7, width / 2, height * 0.05);

  drawBuilding(350, 250, 80, 150);
  drawBuilding(460, 220, 70, 180);

  fill(255);
  ellipse(400, 100, 80, 50);
  ellipse(470, 90, 70, 40);
  drawCar(370, height * 0.75 - 30);
}

function drawTree(x, y) {
  fill(101, 67, 33);
  rect(x, y, 20, 60);
  fill(34, 139, 34);
  ellipse(x + 10, y, 60, 60);
}

function drawBird(x, y) {
  line(x, y, x + 10, y - 10);
  line(x + 10, y - 10, x + 20, y);
}

function drawBuilding(x, y, w, h) {
  fill(150);
  rect(x, y, w, h);
  fill(255, 255, 180);
  let rows = floor(h / 30);
  let cols = floor(w / 20);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      rect(x + 5 + j * 20, y + 5 + i * 30, 15, 20);
    }
  }
}

function drawCar(x, y) {
  fill(255, 0, 0);
  rect(x, y, 80, 30);
  fill(0);
  ellipse(x + 20, y + 30, 20);
  ellipse(x + 60, y + 30, 20);
}
