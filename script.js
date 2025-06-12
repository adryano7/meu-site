// Textos para o carrossel de curiosidades
const textosCarrossel = [
  "Sabia que mais de 50% da população mundial vive em áreas urbanas?",
  "O campo é responsável por alimentar bilhões de pessoas.",
  "Cidades sustentáveis investem em tecnologia verde e energia limpa.",
  "A interdependência campo-cidade é essencial para o equilíbrio ambiental.",
  "A agricultura urbana está crescendo em muitas metrópoles pelo mundo.",
  "Mais de 70% do oxigênio que respiramos vem das plantas cultivadas e florestas.",
  "A urbanização acelerada requer planejamento para evitar problemas sociais.",
  "Tecnologias rurais inovadoras aumentam a produtividade com menor impacto ambiental.",
  "A cultura rural influencia festivais, música e culinária urbana.",
  "Políticas públicas devem integrar desenvolvimento rural e urbano para o futuro."
];

let indiceTexto = 0;

function trocarTexto(direcao) {
  indiceTexto = (indiceTexto + direcao + textosCarrossel.length) % textosCarrossel.length;
  document.querySelector("#carrossel-texto p").textContent = textosCarrossel[indiceTexto];
}

// Mensagens dinâmicas para os botões de interação
function mostrarMensagem(tipo) {
  const msgEl = document.getElementById("mensagem-dinamica");
  let msg = "";
  switch(tipo) {
    case 'campo':
      msg = "O campo contribui com alimentos, matérias-primas, recursos naturais e é fundamental para a qualidade ambiental do planeta.";
      break;
    case 'cidade':
      msg = "A cidade concentra serviços, cultura, inovação e oportunidades econômicas que impulsionam o desenvolvimento do país.";
      break;
    case 'conexao':
      msg = "A conexão entre campo e cidade promove sustentabilidade, troca cultural e equilíbrio econômico.";
      break;
    case 'historia':
      msg = "Historicamente, o campo abasteceu as cidades e moldou a cultura nacional, sendo essencial para o progresso social.";
      break;
    case 'desafios':
      msg = "Os principais desafios são o desmatamento, desigualdade social, poluição urbana e perda das tradições rurais.";
      break;
    case 'solucoes':
      msg = "Soluções envolvem agricultura sustentável, planejamento urbano, valorização cultural e investimento em tecnologias verdes.";
      break;
    default:
      msg = "";
  }
  msgEl.textContent = msg;
}
