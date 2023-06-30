const person = {
    name: "Carlos Eduardo",
    age: 21,
    addres: {
        street: "Avenida Pedro II",
        number: "198",
        complement: "",
        district: "Centro",
        city: "Arcoverde",
        state: "Pernambuco"
    }
} // Objeto

// JSON.stringify(obj) // Converte para string
// JSON.parse(str) // Converte para objeto

const personStr = JSON.stringify(person)
 // console.log(typeof personStr)

const personObjt = JSON.parse(personStr)
 console.log(typeof personObjt)