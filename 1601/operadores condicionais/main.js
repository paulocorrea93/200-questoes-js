// exercício 19 - intervalo entre números

function intervaloNumeros(n1, n2, n3) {
  if (n3 > n1 && n3 < n2) {
    console.log(`${n3} está entre ${n1} e ${n2}.`);
  } else {
    console.log(`${n3} não está entre ${n1} e ${n2}.`);
  }
}

intervaloNumeros(12, 32, 28);
intervaloNumeros(12, 32, 53);

// exercício 20 - classificação da nota

function classificacaoDaNota(nota) {
  if (nota == 0) {
    console.log(`Péssima.`);
  } else if (nota >= 1 && nota <= 5) {
    console.log(`Ruim.`);
  } else if (nota >= 6 && nota <= 7) {
    console.log(`Regular.`);
  } else if (nota >= 8 && nota <= 9) {
    console.log(`Boa.`);
  } else if (nota == 10) {
    console.log(`Excelente!`);
  }
}

classificacaoDaNota(10);
classificacaoDaNota(3);
classificacaoDaNota(6);
classificacaoDaNota(8);

// exercício 21 - definir estação baseado no mês

function qualEstacao(mes) {
  if (mes == 12 || mes == 1 || mes == 2) {
    console.log(`Verão.`);
  } else if (mes == 3 || mes == 4 || mes == 5) {
    console.log(`Outono.`);
  } else if (mes == 6 || mes == 7 || mes == 8) {
    console.log(`Inverno.`);
  } else if (mes == 8 || mes == 10 || mes == 11) {
    console.log(`Primavera.`);
  }
}

qualEstacao(2);
qualEstacao(4);
qualEstacao(6);
qualEstacao(10);

// exercício 22 - determinar número de dias em um mês

function qtdDias(mes){
    switch (mes) {
      case 2:
        console.log(`28 dias`);
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        console.log(`30 dias`);
        break;
      default:
        console.log(`31 dias`)
    }
}

qtdDias(2)
qtdDias(6)
qtdDias(1)

// exercício 23 - definir cor do semaforo

function corSemaforo(cor){
    if(cor === "verde"){
        console.log(`Siga em frente`)
    } else if(cor === "amarelo"){
        console.log(`Atenção`)
    } else if(cor === "vermelho"){
        console.log(`Pare`)
    } else {
        console.log(`Digite um cor válida`)
    }
}

corSemaforo("verde")
corSemaforo("vermelho")
corSemaforo("amarelo")
corSemaforo("azul")