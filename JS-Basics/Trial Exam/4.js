function solve(input) {

    let passagers = +input.shift()
    let stations = +input.shift()

    for (let i = 0; i < stations; i++) {
        let command = +input.shift()
        let command2 = +input.shift()

        if(i % 2 == 0){
            passagers = passagers - command + command2 + 2
        } else {
            passagers = passagers - command + command2 - 2
        }
    }
    console.log(`The final number of passengers is : ${passagers}`)
}

solve([20, 2, 10, 5, 5, 3])