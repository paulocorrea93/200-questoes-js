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