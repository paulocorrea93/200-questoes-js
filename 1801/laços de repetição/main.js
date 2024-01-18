// exercício 33 - imprimir os 10 1os números da sequencia de fibonacci

let n1 = 0
let n2 = 1

console.log(n1)
console.log(n2)

for(x = 2; x <= 10; x++){
  
  let fibo = n1+n2
  console.log(fibo)

  n1 = n2
  n2 = fibo
}

// exercício 34 - FizzBuzz

let fizzBuzz = 1

while(fizzBuzz <= 100){
  if(fizzBuzz % 3 == 0){
    console.log(`Fizz`)
  } else if(fizzBuzz % 5 == 0){
    console.log(`Buzz`)
  } else {
    console.log(`${fizzBuzz}`)
  }
  fizzBuzz++
}

// exercício 35 - números triangulares

for(x = 1; x <= 10; x++){
  let triNum = x*((x+1)/2)
  console.log(triNum)
}

// execício 36 - números perfeitos de 1 a 100

for(x = 1; x <= 100; x++){
  let soma = 0

  for(y = 1; y < x; y++){
    if(x % y === 0){
      soma+=y
    }
  }

  if(soma === x){
    console.log(x)
  }

}

// exercício 37 - números ao quadrado

let quadNum = 1

while(quadNum <= 10){
  let quadrado = quadNum*quadNum
  console.log(quadrado)
  quadNum++
}

// exercício 38 - números ao cubo

let cuboNum = 1

do{
  let cubo = cuboNum*cuboNum*cuboNum
  console.log(cubo)
  cuboNum++
} while(cuboNum <= 10)

// exercício 39 - número fatorial

let numero = 5
let fatorial = 1

for(let x = 1; x <= numero; x++){
  fatorial*=x
}
console.log(`O fatorial de ${numero} é ${fatorial}`)

// exercício 40 - inverter string com while

let original = "palavra"
let invertida = ""
let xInvertida = original.length -1

while(xInvertida >= 0){
  invertida+=original[xInvertida]
  xInvertida--
}
console.log(`A string ${original} invertida é ${invertida}`)

//exercício 41 - do while ara transformar decimal em binário

let numerobin = 10
let binario = ""

do{
  binario = (numerobin % 2) + binario
  numerobin = Math.floor(numerobin/2)
}while(numerobin > 0)
console.log(`O número é representado por ${binario} em binário`)

// exercício 42 - numero binario para decimal

let numbin = '1010'
let decimal = 0

for(let x = numbin.length -1, y = 0; x >= 0; x--, y++){
  decimal += parseInt(numbin[x])*Math.pow(2, y)
}
console.log(`${numbin} em decimal é representado por: ${decimal}`)

// exercício 43 - numeros palindromos

function ePalindromo(numPali){
  let reversoPali = 0
  let temp = numPali
  while(temp > 0){
    let digito = temp % 10
    reversoPali = (reversoPali*10)+digito
    temp = Math.floor(temp/10)
  }
  if(numPali === reversoPali){
    console.log(`${numPali} é palindromo`)
  } else {
    console.log(`${numPali} não é palindromo`)
  }
}

ePalindromo(12345)
ePalindromo(12321)

// exercício 44 - soma de duas matrizes.

let matriz1 = [[1, 2],[3, 4]]
let matriz2 = [[5, 6],[7, 8]]
let soma = []
let x1 = 0
do{
let y1 = 0
soma[x1] = []
do {
  soma[x1][y1] = matriz1[x1][y1] + matriz2[x1][y1]
  y1++
} while(y1 < matriz1.length)
x1++
}while(x1 < matriz1.length)
console.log(`A soma das matrizes é ${JSON.stringify(soma)}`)