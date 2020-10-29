function solve(input) {

    let number = +input.shift()

    let output = ""

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let n = 1; n <= 9; n++) {
                    if (number % i === 0 && number % j === 0 &&
                        number % k === 0 && number % n === 0){
                            output += `${i}${j}${k}${n} `
                        }
                }
            }
        }
    }

    console.log(output)
}

solve([3])