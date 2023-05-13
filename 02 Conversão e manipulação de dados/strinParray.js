// String <-> Array
let name = "Felipe Fontoura"

// Uma string já é um "array" (cadeira de caracteres)
console.log(name[0]) // F

// Escreve na vertical
// for (const v of name) {
//   console.log(v)
// }

console.log(name.length) // 15

// Felipe Fontoura -> ["Felipe", "Fontoura"]
console.log(name.split(" "))

let values = [1, 2, 3, 4, 5, 10, 20]
console.log(values.join(" ")) // 1 2 3 4 5 10 20
