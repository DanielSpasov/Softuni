function solve(input) {

    let n = +input.shift()
    let counter = 1
    let flag = false

    for (let rows = 1; rows <= n; rows++) {
        let output = ""
        for (let cols = 1; cols <= rows; cols++) {
            output += counter + " "
            counter++

            if (counter > n) {
                flag = true
                break
            }
        }
        console.log(output)

        if (flag) {
            break
        }
    }
}

solve([12])