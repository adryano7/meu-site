
let modo = 'ambos';

function setup() {
  createCanvas(600, 300).parent('canvas-container');
  noLoop();
}

function draw() {
  background(220);
  if (modo === 'campo' || modo === 'ambos') {
    desenhaCampo();
  }
  if (modo === 'cidade' || modo === 'ambos') {
    desenhaCidade();
  }
}

function setModo(novoModo) {
  modo = novoModo;
  redraw();
}

function desenhaCampo() {
  fill(34, 139, 34);
  rect(0, height / 2, width / 2, height / 2);
  fill(139, 69, 19);
  rect(100, 200, 20, 50);
  fill(34, 139, 34);
  ellipse(110, 190, 50, 50);
}

function desenhaCidade() {
  fill(169);
  rect(width / 2, 100, 50, 150);
  rect(width / 2 + 60, 130, 40, 120);
  rect(width / 2 + 110, 90, 60, 160);
}
