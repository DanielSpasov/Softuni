function solve(input) {

    let num = +input.shift()

    for (let power = 0; power <= num; power += 2) {
        console.log(2 ** power)
    }
}

solve([5])