// alterando valores de formulários pelo DOM
let nome = document.getElementById("nome");
let meuCheckbox = document.getElementById("meuCheckbox");
let meuSelect = document.getElementById("meuSelect");

let nomeAtual = nome.value;
let isChecked = meuCheckbox.checked;
let valorSelecionado = meuSelect.value;
let indiceSelecionado = meuSelect.selectedIndex;

nomeAtual = "Ozzy";
isChecked = true;
// isChecked = false
meuSelect.selectedIndex = 2;
