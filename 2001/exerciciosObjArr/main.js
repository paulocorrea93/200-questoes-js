// exercício 01 - criar estudante, com idade, curso e alterar idade

let estudante = {
  nome: "Paulo",
  idade: 30,
  curso: "Nutrição",
};

estudante.idade = 31;

console.log(estudante);

// exercício 02 - adicionando propriedades ao objeto

estudante.semestre = 4;

console.log(estudante);

// exercício 03 - manipulação de arrays

let frutas = ["mamãe", "limão", "pessego", "morango", "abacaxi"];

frutas.push("kiwi", "melão", "ameixa");

console.log(frutas);

frutas.shift()

console.log(frutas);

// exercício 04 - metodos array - join e slice

let tdsFrutas = frutas.join(", ")

console.log(tdsFrutas);

let duasFrutas = frutas.slice(1, 3)

console.log(duasFrutas)