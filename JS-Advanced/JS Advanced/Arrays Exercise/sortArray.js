function solve(input) {

    let arr = input.sort((a, b) => (a.localeCompare(b))).sort((a, b) => (a.length - b.length))

    for (line of arr) {
        console.log(line)
    }
}

// solve(['alpha',
//     'beta',
//     'gamma '])

// solve(['Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George '])

solve(['test',
    'Deny',
    'omen',
    'Default'])