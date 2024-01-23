// exercício 01

let meuFormulario = document.getElementById("meuFormulario");
let nome = document.getElementById("nome");

meuFormulario.addEventListener('submit', (e) => {
  e.preventDefault()

  if(nome.value === ""){
    alert("Digite seu nome no campo 'nome'!")
  } else {
    alert("Formulário enviado com sucesso.")
  }

})