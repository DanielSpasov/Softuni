function solve(input) {

    let a = input.shift()
    let result = 0

    while (a !== "Stop") {

        let number = +(a)

        result += number

        a = input.shift()
    }
    console.log(result)
}

solve([10,
    20,
    30,
    45,
    "Stop"])