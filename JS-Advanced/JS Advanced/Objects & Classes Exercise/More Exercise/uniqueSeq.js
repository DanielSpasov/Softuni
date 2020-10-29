function solve(input) {

    let uniqueArrays = new Map()

    for (let line of input) {

        let currentArray = JSON.parse(line).map(Number).sort((a, b) => b - a)
        let toAdd = currentArray.join(', ')

        if (!uniqueArrays.has(toAdd)) {
            uniqueArrays.set(toAdd, currentArray.length)
        }
    }

    let output = Array.from(uniqueArrays.keys()).sort((a, b) => uniqueArrays.get(a) - uniqueArrays.get(b))
    output.forEach(num => console.log(`[${num}]`))
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])

// solve(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"])