// funções de alta ordem

let numeros = [10, 11, 12]
let quadrado = numeros.map((n) => {
  return n*n
})

console.log(quadrado)

// funcoes de callback

function cumprimentar(mensagem){
  console.log(`Olá, `)
  mensagem()
}

function nomeJoao(){
  console.log("João")
}

cumprimentar(nomeJoao)