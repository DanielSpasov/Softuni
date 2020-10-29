function firstLastSum(input) {

    let first = +input.shift()
    let last = +input.pop()

    console.log(first + last)
}

firstLastSum([20, 30, 40])
firstLastSum([5, 10])