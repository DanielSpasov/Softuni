function solve(arg) {

    if (arg === undefined) {
        let row = '* '.repeat(5)

        for (let i = 0; i < 5; i++) {
            console.log(row)
        }
    } else {
        let row = '* '.repeat(arg)

        for (let i = 0; i < arg; i++) {
            console.log(row)
        }
    }
}

// solve(1)
// solve(2)
// solve(5)
solve()