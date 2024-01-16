// exercício 19 - intervalo entre números

function intervaloNumeros(n1, n2, n3){
    if(n3 > n1 && n3 < n2){
        console.log(`${n3} está entre ${n1} e ${n2}.`)
    } else {
        console.log(`${n3} não está entre ${n1} e ${n2}.`)
    }
}

intervaloNumeros(12, 32, 28)
intervaloNumeros(12, 32, 53)

// exercício 20 - classificação da nota

function classificacaoDaNota(nota){
    if(nota == 0){
        console.log(`Péssima.`)
    } else if(nota >= 1 && nota <= 5){
        console.log(`Ruim.`)
    }else if(nota >= 6 && nota <= 7){
        console.log(`Regular.`)
    }else if(nota >= 8 && nota <= 9){
        console.log(`Boa.`)
    }else if(nota == 10){
        console.log(`Excelente!`)
    }
}

classificacaoDaNota(10)
classificacaoDaNota(3)
classificacaoDaNota(6)
classificacaoDaNota(8)