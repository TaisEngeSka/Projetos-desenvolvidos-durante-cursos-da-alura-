alert(`Boas vindas ao jogo do número secreto`);

let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);

  // Se chute igual ao número secreto
  if (chute == numeroSecreto) {
    // Código PARA nada mais executa
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

// Operador Ternario, se tentativas > 1 faz tal : (se não) tal coisa;
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
