function solve(input) {

    let x1 = input[0]
    let y1 = input[1]
    let x2 = input[2]
    let y2 = input[3]

    let dx1to0 = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2))
    let dx2to0 = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2))
    let dx1tox2 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(dx1to0) ? 'valid' : 'invalid'}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(dx2to0) ? 'valid' : 'invalid'}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(dx1tox2) ? 'valid' : 'invalid'}`)
}

solve([3, 0, 0, 4])
solve([2, 1, 1, 1])