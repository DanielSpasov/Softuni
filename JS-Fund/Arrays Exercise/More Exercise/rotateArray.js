function solve(input) {

    let rotations = +input.pop()

    if(isNaN(rotations)){
        console.log('Empty')
        return
    }

    for (let i = 0; i < rotations; i++) {

        input.unshift(input[input.length - 1])
        input.pop()
    }
    console.log(input.join(' '))
}

solve(['1', '2', '3', '4', '2'])
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
solve(['remove', 'remove', 'remove'])