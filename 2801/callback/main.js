// funções de callback

function ola (nome){
    alert(`Olá ${nome}`)
}

function entradaDoUsuario(callback){
    let nome = prompt(`Digite o seu nome: `)
    callback(nome)
}

entradaDoUsuario(ola)