// eventos de mouse

let buttonAction = document.getElementById('myButton')
let overText = document.getElementById('myParagraph')

buttonAction.addEventListener('click', () =>{
    alert("botão clicado.")
})

overText.addEventListener('mouseover', () => {
    alert("o cursor está em cima do texto")
})