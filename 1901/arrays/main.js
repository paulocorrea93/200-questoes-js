let frutas = ['uva', 'abacaxi', 'melancia', 'manga', 'pessego', 'melão']

console.log(frutas[1])

// alterando valores de arrays

let umaString = frutas.join(", ")

console.log(umaString)

frutas[1] = 'abacate'

console.log(frutas[1])

frutas.push("goiaba")

console.log(frutas)

frutas.pop()

console.log(frutas)

frutas.shift()

console.log(frutas)

frutas.unshift("ameixa")

console.log(frutas)

frutas.splice(2)

console.log(frutas)

let frutasTropicais = frutas.slice(1, 4)

console.log(frutasTropicais)