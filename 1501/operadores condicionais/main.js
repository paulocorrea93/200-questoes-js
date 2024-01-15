// exercício 13 - calculadora de IMC

function calcIMC(nome, peso, altura){
    imcCalc = peso/(altura*altura)
    imc = imcCalc.toFixed(1)

    if(imc < 18.5){
        console.log(`Olá, ${nome}, seu IMC atual é: ${imc}, você está abaixo do peso.`)
    } else if(imc >= 18.5 && imc <= 24.9){
        console.log(`Olá, ${nome}, seu IMC atual é: ${imc}, você está no peso ideal.`)
    } else if(imc >= 25 && imc <= 29.9){
        console.log(`Olá, ${nome}, seu IMC atual é: ${imc}, você está com excesso de peso.`)
    } else if(imc >= 30 && imc <= 34.9){
        console.log(`Olá, ${nome}, seu IMC atual é: ${imc}, você está com obesidade grau I.`)
    } else if(imc >= 35 && imc <= 39.9){
        console.log(`Olá, ${nome}, seu IMC atual é: ${imc}, você está com obesidade grau II.`)
    } else if(imc > 39.9){
        console.log(`Olá, ${nome}, seu IMC atual é: ${imc}, você está com obesidade grau III.`)
    }

}

calcIMC("Paulo", 103, 1.75)

// exercício 14 - verificar se o ano é bissexto

function anoBissexto(ano){
    bissexto = ano%4

    if(bissexto === 0){
        console.log(`${ano} é bissexto.`)
    } else {
        console.log(`${ano} não é bissexto.`)
    }
}

anoBissexto(2012)

// exercício 15 - verificar se a palavra é um palindromo

function palindromo(palavra){

    let palavraOrig = palavra
    let palavraReverse = palavraOrig.split('').reverse().join('')
    
    if(palavraOrig === palavraReverse){
        console.log(`${palavra} é um palindromo.`)
    } else {
        console.log(`${palavra} não é um palindromo.`)
    }
}

palindromo("amor")
palindromo("radar")

// exercício 16 - encontrar o maior número entre 3 números

function oMaior(n1, n2, n3){
    let nums = [n1, n2, n3]
    let maiorNum = Math.max(...nums)

    console.log(`entre os números ${n1}, ${n2}, ${n3} o maior é o: ${maiorNum}`)
}

oMaior(148,246,38)