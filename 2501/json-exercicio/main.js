// criar objeto com varias propriedades

let aluno = {
    nome: "Paulo",
    idade: 30,
    matriculado: true,
    nMatricula: 1234,
    curso: "ciência da computação"
}

// converção do objeto em JSON

let alunoJSON = JSON.stringify(aluno)

console.log(alunoJSON)

// conversão do JSON em Objeto

jsonAluno = JSON.parse(alunoJSON)

console.log(jsonAluno)

// importação de elementos

let meuBotao = document.getElementById('meuBotao')

// salvando entrada no armazenamento local

meuBotao.addEventListener('click', (e)=> {
    e.preventDefault()
    let meuTexto = document.getElementById('meuTexto').value
    localStorage.setItem("meuTexto", meuTexto)
    console.log(localStorage)
})
