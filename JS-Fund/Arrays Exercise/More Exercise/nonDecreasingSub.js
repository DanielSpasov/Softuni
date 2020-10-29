function solve(input) {

    let biggestNum = Number.MIN_SAFE_INTEGER
    let output = []

    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i]

        if(currentNum >= biggestNum){
            biggestNum = currentNum
            output.push(biggestNum)
        }
    }
    console.log(output.join(' '))
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
solve([1, 2, 3, 4])
solve([20, 3, 2, 15, 6, 1])