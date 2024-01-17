// exercício 28 - usando while para somar todos os numeros de 1 a 100

let x = 1;
let novoX = 0;

while (x <= 100) {
  novoX += x;
  x++;
}
console.log(novoX);

// exercício 29 - numero pares de 1 a 100 com do while

let pares = 1;

do {
  if (pares % 2 == 0) console.log(pares);
  pares++;
} while (pares <= 100);

// exercício 30 - números primos de 1 a 100 com laço for

for (x = 2; x <= 100; x++) {
  let primo = true;

  for (y = 2; y < x; y++) {
    if (x % y === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    console.log(x);
  }
}

// exercício 31 - adivinhar numero entre 1 e 100 com while

let min = 1;
let max = 100;
let chute = Math.floor((min + max) / 2);
let numeroPensado = 12;

while(chute!=numeroPensado){
  if(chute > numeroPensado){
    max = chute
  } else {
    min = chute
  }
  chute = Math.floor((min+max)/2)
}

console.log(`O número pensado é: ${chute}`)

// exercício 32 - pedra, papel, tesoura contra a máquina

// 3 variáveis, pedra, papel e tesoura
// cada uma tem que ter sua contrapartida
// se for tesoura, ganha de papel e perde para pedra
// se for pedra, ganha de tesoura e perde para papel
// se for papel, ganha de pedra e perde para tesoura


let escolhaDoUsuario = "papel"
let escolhaDoComputador
let resultado

do{
  let aleatorio = Math.floor(Math.random()*3)
  switch(aleatorio){
    case 0:
      escolhaDoComputador = "pedra"
      case 1:
      escolhaDoComputador = "papel"
      break
      default:
        escolhaDoComputador = "tesoura"
  }

  if((escolhaDoUsuario === "pedra" && escolhaDoComputador === "tesoura") || 
  (escolhaDoUsuario === "papel" && escolhaDoComputador === "pedra") || 
  (escolhaDoUsuario === "tesoura" && escolhaDoComputador === "papel")){
    resultado = `Vitória do usuário.`
  } else if (escolhaDoUsuario === escolhaDoComputador){
    resultado = `Empate.`
  } else{
    resultado = `Vitória do computador.`
  }
  console.log(`O usuário escolheu ${escolhaDoUsuario} e o computador escolheu ${escolhaDoComputador}, ${resultado}`)
} while(resultado === "Empate")