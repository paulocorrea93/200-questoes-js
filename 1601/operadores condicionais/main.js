// exercício 19 - intervalo entre números

function intervaloNumeros(n1, n2, n3){
    if(n3 > n1 && n3 < n2){
        console.log(`${n3} está entre ${n1} e ${n2}`)
    } else {
        console.log(`${n3} não está entre ${n1} e ${n2}`)
    }
}

intervaloNumeros(12, 32, 28)
intervaloNumeros(12, 32, 53)