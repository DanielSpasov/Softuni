function solve(input, rotations) {

    let output = ''

    for (let i = 0; i < rotations; i++) {
        let currentNum = input[0]
        input.push(currentNum)
        input.shift()
    }

    for(let num of input){
        output += `${num} `
    }

    console.log(output)
}

solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)
solve([2, 4, 15, 31], 5)