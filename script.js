const imagens = [
  "imagens/campo.jpg",
  "imagens/cidade.jpg",
  "imagens/conexao.jpg",
  "imagens/extra.jpg"
];
let indiceAtual = 0;

function trocarImagem(direcao) {
  indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;
  document.getElementById("imagem-carrossel").src = imagens[indiceAtual];
}

function mostrarMensagem(tipo) {
  const msgEl = document.getElementById("mensagem-dinamica");
  let msg = "";
  switch(tipo) {
    case 'campo':
      msg = "O campo fornece alimentos e preserva a natureza.";
      break;
    case 'cidade':
      msg = "A cidade oferece serviços e oportunidades.";
      break;
    case 'conexao':
      msg = "Ambos se complementam para um futuro sustentável.";
      break;
  }
  msgEl.textContent = msg;
}
