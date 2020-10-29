function solve(input) {

    let output = []

    while (input.length !== 0) {
        let [current, biggest] = [input.shift(), Math.max(...input)]
        if (current > biggest) output.push(current)
    }
    console.log(output.join(' '))
}

solve([1, 4, 3, 2])
solve([14, 24, 3, 19, 15, 17])
solve([41, 41, 34, 20])
solve([27, 19, 42, 2, 13, 25, 48])