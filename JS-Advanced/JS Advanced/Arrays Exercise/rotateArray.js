function solve(input) {

    let rotations = input.pop()

    if(rotations > 1000){
        rotations = rotations % 1000
    }

    for (let i = 0; i < rotations; i++) {
        let lastEl = input.pop()
        input.unshift(lastEl)
    }

    console.log(input.join(' '))
}

solve(['1',
    '2',
    '3',
    '4',
    '2'])

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'])