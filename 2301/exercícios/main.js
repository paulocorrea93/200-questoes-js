// exercício 01

let nomeForm = document.getElementById("nomeForm");
let nome = document.getElementById("nome");
let emailForm = document.getElementById("emailForm");
let emailText = document.getElementById("emailText");

nomeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nome.value === "") {
    alert("Digite seu nome no campo 'nome'!");
  }
});

// exercício 02

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailText.value.includes("@") || !emailText.value.includes(".")) {
    alert("E-mail inválido.");
  }
});
