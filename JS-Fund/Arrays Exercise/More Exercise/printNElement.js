function solve(input) {

    let step = input.pop()
    let key = Math.ceil(input.length / step)
    output = []

    for (let i = 0; i < key; i++) {
        output.push(input[step * i])
    }
    console.log(output.join(' '))
}

solve(['5', '20', '31', '4', '20', '2'])
solve(['dsa', 'asd', 'test', '2'])
solve(['1', '2', '3', '4', '5', '6'])