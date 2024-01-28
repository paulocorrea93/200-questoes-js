// async await

async function minhaFuncao(){
    try{
        const resultado = await algumaFuncaoAssincrona()
        console.log(resultado)
    } catch(erro){
        console.log(erro)
    }
}