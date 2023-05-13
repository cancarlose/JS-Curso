let set = [1, 2, 3, 4, 5]

    let [n1, n2] = set // desestruturando um array
    console.log("n1", n1)
    console.log("n2", n2)

    function myFunction() {
      const x = 10
      const y = 400

      return [x, y]
    }

    const [x, y] = myFunction() // desestruturando o retorno de uma função
    console.log("x", x)
    console.log("y", y)
