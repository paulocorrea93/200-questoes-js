// DOM - document object model

// alteração de texto

let novoTitulo = document.getElementById("main-header");

novoTitulo.textContent = "Novo título";

// adicionado tag pelo DOM

let novaDiv = document.getElementById("main");

novaDiv.innerHTML = "<p>Novo parágrafo.</p>";
