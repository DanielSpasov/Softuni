function solve(n) {

    let rowsCounter = 0
    let row = ''
    for (let i = 1; i <= n; i++) {
        rowsCounter++
        for (let j = 0; j < rowsCounter; j++) {
            row += `${i} `
        }
        console.log(row)
        row = ''
    }
}

solve(3)
solve(5)
solve(6)