// let nomeForm = document.getElementById("nomeForm");
// let emailForm = document.getElementById("emailForm");
// let passForm = document.getElementById("passForm");
// let checkForm = document.getElementById('checkForm')

let jsForm = document.getElementById('jsForm')

let emailText = document.getElementById("emailText");
let nome = document.getElementById("nome");
let passText = document.getElementById("passText");
let checkBox = document.getElementById('checkBox')

let regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

jsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nome.value === "") {
    alert("Digite seu nome no campo 'nome'!");
  }
});

jsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailText.value.includes("@") || !emailText.value.includes(".")) {
    alert("E-mail inválido.");
  }
});

// exercício 03

jsForm.addEventListener('submit', (e)=> {
  e.preventDefault()
  if(!regex.test(passText.value)){
    alert("A senha deve conter 8 caracteres, 1 letra e 1 número")
  }
})

jsForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if(!checkBox.checked)
  alert("Você concordou.")
})