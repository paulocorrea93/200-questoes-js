// exercício 01

let mainHeader = document.getElementById('main-header')
let divMain = document.getElementById("main");
let myButton = document.getElementById("myButton");
let myparaMouseParag = document.getElementById("paraMouse");
let myForm = document.getElementById("myForm");
let myInput = document.getElementById("myInput");
let jsLogo = document.getElementById('js-logo')
let link = document.querySelector('a')

// exercício 02

mainHeader.textContent = "Títilo 2"
paraMouse.textContent = "Mickey Mouse"
divMain.innerHTML = '<p>Parágrafo 2</p>'

// exercício 03

link.setAttribute('href', 'https://www.youtube.com.br')

// exercício 04

mainHeader.style.color = 'silver'
mainHeader.style.fontSize = '50px'
myButton.style.borderRadius = '30px'
myButton.style.border = 'none'
myButton.style.color = 'white'
myButton.style.background = '#800080'

// exercício 05

function mudarCor(){
  mainHeader.style.color = '#800080'
}