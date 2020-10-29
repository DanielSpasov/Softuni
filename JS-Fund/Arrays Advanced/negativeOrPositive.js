function negativeOrPositive(input) {

    let output = []

    for (i of input) {
        if (i < 0) {
            output.unshift(i)
        } else {
            output.push(i)
        }
    }

    for (i of output) {
        console.log(i)
    }
}

negativeOrPositive([7, -2, 8, 9])
negativeOrPositive([3, -2, 0, -1])