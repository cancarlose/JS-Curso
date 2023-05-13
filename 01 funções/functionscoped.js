// console.log(mult(10)) // não é possível executar devido ao Hoisting

const mult = function (n) {
    n *= n
    return n
  }

  console.log(mult(2))
