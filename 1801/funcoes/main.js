// exercício 45 - funcao "ola mundo"

function olaMundo(palavra){
  console.log(palavra)
}

olaMundo("Olá mundo")

// exercicio 46 - somar dois numeros

function somar2(n1, n2){
console.log(n1+n2)
}

somar2(4, 3)

// execicio 47 - funcao ao quadrado

function aoQuadrado(n){
  let quadrado = n*n
  console.log(quadrado)
}

aoQuadrado(12)

// exercicio 48 - funcao impar ou par

function imparPar(n){
  if(n % 2 == 0){
    console.log(`${n} é par`)
  } else {
    console.log(`${n} é impar`)
  }
}

imparPar(4)
imparPar(5)

// exercicio 49 - maior de 3 numeros

function maiorDe3(n1, n2, n3){
  let maior = Math.max(n1, n2, n3)

  console.log(maior)
}

maiorDe3(355, 45, 5)

// exercício 50 - funcao string invertida

function stringInvertida(palavra){
  let palavraReverse = palavra.split("").reverse().join("")
  console.log(`${palavra} ao contrário é ${palavraReverse}`)
}

stringInvertida("Paulo")