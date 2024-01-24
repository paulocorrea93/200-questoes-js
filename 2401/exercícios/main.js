let nomeForm = document.getElementById("nomeForm");
let emailForm = document.getElementById("emailForm");
let passForm = document.getElementById("passForm");

let emailText = document.getElementById("emailText");
let nome = document.getElementById("nome");
let passText = document.getElementById("passText");

let regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

nomeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nome.value === "") {
    alert("Digite seu nome no campo 'nome'!");
  }
});

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailText.value.includes("@") || !emailText.value.includes(".")) {
    alert("E-mail inválido.");
  }
});

// exercício 03

passForm.addEventListener('submit', (e)=> {
  e.preventDefault()
  if(!regex.test(passText.value)){
    alert("A senha deve conter 8 caracteres, 1 letra e 1 número")
  }
})