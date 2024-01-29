// função que retorna depois de 2 segundos

function esperaDoisSegundos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tempo esgotado")
        }, 2000)
    })
}

esperaDoisSegundos().then(console.log)