// ecercício 13 - calculadora de IMC

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