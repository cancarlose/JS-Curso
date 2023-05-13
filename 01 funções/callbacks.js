function mult(values, func) {
    // console.log(arguments)

    for (let i = 0; i < values.length; i++) {
      // values[i] *= values[i] // n *= n
      values[i] = func(values[i])
    }

    return values
  }

  const values = [1, 2, 3, 4, 10, 20]
  const func = (n) => n * 2

  console.log(mult(values, func))