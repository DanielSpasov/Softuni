function solve(num1, num2) {

    let row1 = ''
    let row2 = 0
    for (let i = num1; i <= num2; i++) {
        row1 += `${i} `
        row2 += i
    }
    console.log(row1)
    console.log(`Sum: ${row2}`)
}

solve(5, 10)
solve(0, 26)
solve(50, 60)