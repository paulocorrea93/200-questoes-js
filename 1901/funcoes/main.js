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

// exercício 01 - função basica

function saudacao(nome){
  console.log(`Seja bem-vindo, ${nome}.`)
}

saudacao("Paulo")

// exercício 02 - mais de 1 parametro

function soma(n1, n2){
  console.log(n1+n2)
}

soma(2, 5)

// exercício 03 - par ou impar

function parImpar(n){
  if(n % 2 == 0){
    console.log(`${n} é par.`)
  } else {
    console.log(`${n} é impar.`)
  }
}

parImpar(4)
parImpar(9)

// exercício 04 - contagem regressiva

function regressiva(n){
  for(let x = n; x >= 0; x--){
    console.log(x)
  }
}

regressiva(5)
regressiva(14)

// exercício 05 - função e escopo de variavel

function testeVariavelEscopo(){
  let teste = "variavel local"
}

console.log(teste)

// variável não acessada, pois está acessível apenas dentro da função