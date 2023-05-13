// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    // https://developer.mozilla.org/en-US/docs/Glossary/Truthy

    // '' <-> false
    // '2' <-> true
    // 0 <-> false
    // 1 <-> true

    console.log(Boolean("")) // false
    console.log(Boolean("abc")) // true
    console.log(Boolean(0)) // false
    console.log(Boolean(1)) // true

    console.log(Number(true)) // 1
    console.log(Number(false)) // 0

    console.log(String(false)) // typeof string
    console.log(String(true)) // typeof string
  