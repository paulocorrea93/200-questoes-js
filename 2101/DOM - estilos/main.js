// eventos de mouse

let buttonAction = document.getElementById("myButton");
let overText = document.getElementById("myParagraph");

buttonAction.addEventListener("click", () => {
  alert("botão clicado.");
});

overText.addEventListener("mouseover", () => {
  alert("o cursor está em cima do texto");
});

// eventos de entrada de dados

let novoInput = document.getElementById("myInput");
let enviar = document.getElementById("myForm");

novoInput.addEventListener("change", () => {
  console.log("Evento alterado para:" + this.value);
});

enviar.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("formulário enviado.");
});

window.addEventListener('keydown', (e) => {
    alert(`você precionou a tecla ${e}`)
})