// exercício 24 - numero de 1 a 10

for(x = 1; x <= 10; x++){
  console.log(x)
}

// exercício 25 - 10 até 1 com while

let n1 = 10
while(n1 >= 1){
  console.log(n1)
  n1--
}

// exercício 26 - 1 até 20 com do while, apenas número ímpares

let n2 = 1

do{
    if(n2 % 2 != 0){
      console.log(n2)
    }
    n2++
} while (n2 <= 20)

// exercício 27 - tauada de 5 com for

for(x = 1; x <= 10; x++){
  console.log(`5 x ${x} = ${5*x}`)
}