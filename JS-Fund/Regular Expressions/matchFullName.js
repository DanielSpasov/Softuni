function solve(input){

    let pattern = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g
    let names = input.shift()
    let result = names.match(pattern)

    console.log(result.join(' '))
}

solve([
  'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
])