    const numbers = [1, 2, 3, 4, 5]
    const double = numbers.map((n) => n * 2)
    console.log(double)

    // const fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121]
    // const celcius = fahrenheit.map((t) => Math.round(((t - 32) * 5) / 9))
    // console.log(celcius)

    const people = [
        { name: "felipe", age: 40 },
        { name: "aManda", age: 14 },
        { name: "Davi", age: 9 },
      ]
  
      const peopleNormalized = people.map((p) => p.name.toUpperCase())
      console.log(peopleNormalized)
  