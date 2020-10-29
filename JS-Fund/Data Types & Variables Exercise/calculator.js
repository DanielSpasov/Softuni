function solve(a, dec, b) {

    switch (dec) {
        case '+':
            console.log(`${(a + b).toFixed(2)}`)
            break
        case '-':
            console.log(`${(a - b).toFixed(2)}`)
            break
        case '*':
            console.log(`${(a * b).toFixed(2)}`)
            break
        case '/':
            console.log(`${(a / b).toFixed(2)}`)
            break
    }
}

solve(5, '+', 10)
solve(25.5, '-', 3)