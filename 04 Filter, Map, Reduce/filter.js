const numbers = [10, 18, 1, 15]

    // let res = []
    // for (const n of numbers) {
    //   if (n > 10) {
    //     res.push(n)
    //   }
    // }
    // console.log(res)

    let res = numbers.filter((n) => n > 10)
    console.log(res)

    const people = [
      { name: "Felipe", gender: "M", age: 40 },
      { name: "Paulo", gender: "M", age: 14 },
      { name: "Amanda", gender: "F", age: 18 },
    ]

    const m = people.filter((p) => p.age >= 18)
    console.log(m)

    const n = people.filter((p) => p.age >= 18 && p.gender === "M")
    console.log(n)

    const x = people.filter(
      (p) => p.age >= 18 && p.age <= 25 && p.gender === "M"
    )
    console.log(x)
