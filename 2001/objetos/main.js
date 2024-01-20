// metodos de iteração

//forEach()

let frutas = ["melancia", "uva", "kiwi", "morango", "pessego"];

frutas.forEach((frutas) => {
  console.log(frutas);
});

//map()

let numeros = [1, 2, 3, 4, 5];

let dobro = numeros.map((n) => {
  let dbl = n * 2;
  console.log(dbl);
});

// filter()

let numerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numerosFilter.filter((n) => {
  n % 2 == 0;
  return numerosFilter;
});