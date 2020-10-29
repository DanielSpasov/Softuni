function solve(input) {

    let output = ''

    for (let i = input.length - 1; i >= 0; i--) {
        output += `${input[i]} `
    }
    console.log(output)
}

solve(['a', 'b', 'c', 'd', 'e'])
solve(['abc', 'def', 'hig', 'klm', 'nop'])
solve(['33', '123', '0', 'dd'])