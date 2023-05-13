let people = ["Felipe", "André", "Paulo", "Jonny", "Marcelo"]

    // 0 -> n
    // 5 elementos = people.length

    // Retornar elementos específicos de um array
    console.log(people[2])
    console.log(people[people.length - 1])

    // Retornar "fatias" de um array
    console.log(people.slice(2))
    console.log(people.slice(1, 3))

    // Adicionar novos elementos no array (início e fim)
    people.push("Ana") // adiciona no final
    people.unshift("Maria") // adiciona no início do array
    console.log(people)

    // Remover elementos no array (início e fim)
    people.pop() // remove elementos do fim do array (e retorna o elemento removido)
    people.shift() // remove elementos do início do array (e retorna o elemento removido)
    console.log(people)

    // Remover "fatias" de um array
    people.splice(1, 2)
    console.log(people)

    // Localizar elementos
    let index = people.indexOf("Jonny")
    people.splice(index, 1) // utilizo o index para "dizer" ao splice o que remover
    console.log(index)
    console.log(people)