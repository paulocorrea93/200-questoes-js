// objetos

let carro = {
  marca: "fiat",
  ano: 2023,
  modelo: "palio",
  ligar: () => {
    console.log(`ligado`);
  },
};

console.log(carro.marca);
console.log(carro["modelo"]);

carro.cor = "prata"

console.log(carro.cor)

carro.modelo = "uno"

console.log(carro.modelo)

delete carro.marca

console.log(carro.marca)