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