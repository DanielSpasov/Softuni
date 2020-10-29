function solve(input) {

    let n = +input.shift()
    let divBy2 = 0
    let divBy3 = 0
    let divBy4 = 0

    for (let i = 0; i < n; i++) {
        let currentNumber = +input.shift()

        if (currentNumber % 2 == 0) {
            divBy2++
        }
        if (currentNumber % 3 == 0) {
            divBy3++
        }
        if (currentNumber % 4 == 0) {
            divBy4++
        }
    }

    let p1 = divBy2 / n * 100
    let p2 = divBy3 / n * 100
    let p3 = divBy4 / n * 100

    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
}

solve([3,3,6,9])