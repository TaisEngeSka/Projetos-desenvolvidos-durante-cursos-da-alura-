let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
console.log(numeroSecreto);

// Função que modifica algo na tela mas não retorna nada
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroLimite}:`);
}

exibirMensagemInicial();

// Função que não tem parâmetros e não retorna nada
function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!!");

    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;

    exibirTextoNaTela("p", mensagemTentativa);

    document.getElementById("reiniciar").removeAttribute("disabled");

  } else {

    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }

    tentativa++;
    limparCampo();

  }
}

// Função sem parâmetro mas com algum retorno
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosLista = listaNumerosSorteados.length;

  if (quantidadeElementosLista == numeroLimite) {
    listaNumerosSorteados = [];
  }
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);

    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = " ";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  console.log(numeroSecreto);
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
