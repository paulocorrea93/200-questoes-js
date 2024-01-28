// criar objeto com varias propriedades

let aluno = {
  nome: "Paulo",
  idade: 30,
  matriculado: true,
  nMatricula: 1234,
  curso: "ciência da computação",
};

// converção do objeto em JSON

let alunoJSON = JSON.stringify(aluno);

console.log(alunoJSON);

// conversão do JSON em Objeto

jsonAluno = JSON.parse(alunoJSON);

console.log(jsonAluno);

// importação de elementos

let meuBotao = document.getElementById("meuBotao");
let btnRecup = document.getElementById("btn-recup");
let btnDelete = document.getElementById("btn-delete");

// salvando entrada no armazenamento local

meuBotao.addEventListener("click", (e) => {
  e.preventDefault();
  let meuTexto = document.getElementById("meuTexto").value;
  localStorage.setItem("meuTexto", meuTexto);
  console.log(localStorage);
});

btnRecup.addEventListener("click", (e) => {
  e.preventDefault();
  let meuTexto = document.getElementById("meuTexto").value;
  let valor = localStorage.getItem("meuTexto", meuTexto);
  alert(valor);
});

btnDelete.addEventListener("click", (e) => {
  e.preventDefault();
  let meuTexto = document.getElementById("meuTexto").value;
  localStorage.removeItem("meuTexto", meuTexto)
});

// armazenando objetos no localStorage

let alunoObj = {
    nome: "Gabriel",
    idade: 30
}

let meuJson = JSON.stringify(alunoObj)
localStorage.setItem("alunoObj", meuJson)

let objRecup = localStorage.getItem("alunoObj")
let novoObj = JSON.parse(objRecup)
console.log(novoObj)