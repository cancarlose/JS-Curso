    // toFixed()
    // Math.ceil()
    // Math.floor()
    // Math.round()
    // new Intl.NumberFormat().format()
    let value = 1234.255

    console.log(value.toFixed(2))
    console.log(Math.ceil(value))
    console.log(Math.floor(value))
    console.log(Math.round(value))
    console.log(
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)
    )
