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
