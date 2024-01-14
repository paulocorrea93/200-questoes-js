// exercício 09 - verificar se num é positivo ou negativo

let num1 = 0

if(num1 > 0){
    console.log(`${num1} é positivo`)
} else if (num1 < 0){
    console.log(`${num1} é negativo`)
} else {
    console.log(`${num1} é neutro`)
}

// outra alternativa

function verificarNumero (x){
    if(x > 0){
        console.log(`${x} é positivo`)
    } else if (x < 0){
        console.log(`${x} é negativo`)
    } else {
        console.log(`${x} é neutro`)
    }   
}

verificarNumero(1)
verificarNumero(0)
verificarNumero(-1)

// exercício 10

function mediaAluno (nome, x,y){
    media = (x+y)/2
    if(media >= 7){
        console.log(`${nome}, sua média foi ${media}, você foi aprovado.`)
    } else {
        console.log(`reprovado, ${nome} sua média foi ${media}`)
    }
}

mediaAluno("Paulo",10, 8)
mediaAluno("João",4, 8)