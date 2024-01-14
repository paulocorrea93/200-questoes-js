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

// exercício 10 - verificar através da media de notas se o aluno passou de ano ou não

function mediaAluno (nome, x,y){
    media = (x+y)/2
    if(media >= 7){
        console.log(`${nome}, sua média foi ${media}, você foi aprovado.`)
    } else {
        console.log(`reprovado, ${nome} sua média foi ${media}`)
    }
}

mediaAluno("paulo",10, 8)
mediaAluno("joão",4, 8)

// exercício 11 - verificar se uma pessoa pode votar ou não com base na idade

function podeVotar(idade){
    if(idade >= 18 && idade <= 70){
        console.log(`você tem ${idade} anos, pode votar`)
    } else {
        console.log(`não pode votar, você tem apenas ${idade} anos`)
    }
}

podeVotar(10)
podeVotar(40)