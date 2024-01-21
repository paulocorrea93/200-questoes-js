// DOM - document object model

// alteração de texto

let novoTitulo = document.getElementById("main-header");

novoTitulo.textContent = "Novo título";

// adicionado tag pelo DOM

let novaDiv = document.getElementById("main");

novaDiv.innerHTML = "<p>Novo parágrafo.</p>";

// alteração de atributos com DOM

let novoLink = document.querySelector("a");

novoLink.setAttribute("href", "https://www.youtube.com.br");

// alteração de estilos pelo DOM

novoTitulo.style.color = "gray";
