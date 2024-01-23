// alterando valores de formulários pelo DOM
let nome = document.getElementById("nome");
let meuCheckbox = document.getElementById("meuCheckbox");
let meuSelect = document.getElementById("meuSelect");
let meuFormulário = document.getElementById("meuFormulario");

let nomeAtual = nome.value;
let isChecked = meuCheckbox.checked;
let valorSelecionado = meuSelect.value;
let indiceSelecionado = meuSelect.selectedIndex;

nomeAtual = "Ozzy";
isChecked = true;
// isChecked = false
meuSelect.selectedIndex = 2;

// validando formulários pelo DOM

meuFormulário.addEventListener("submit", (e) => {
  e.preventDefault;
  if (nome.value === "") {
    alert("insira o seu nome");
    return false;
  } else {
    alert("formulário enviado com sucesso");
  }
});
