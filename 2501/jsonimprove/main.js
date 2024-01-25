  // convertendo JSON em objeto

  let json = '{"nome":"Paulo", "idade": 30, "cidade": "Manaus"}'
  let objJson = JSON.parse(json)
  console.log(objJson)

  // convertendo objeto em JSON

  let objJson2 = {
    sobrenome: "Correa",
    mesDeNiver: 5,
    estado: "Amazonas"
  }

  let paraJson = JSON.stringify(objJson2)

  console.log(paraJson)