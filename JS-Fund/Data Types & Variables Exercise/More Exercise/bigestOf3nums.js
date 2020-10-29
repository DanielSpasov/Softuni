function solve(a, b, c) {

    if (a >= b && a >= c) {
        console.log(a)
    } else if (b >= a && b >= c) {
        console.log(b)
    } else if (c >= a && c >= b) {
        console.log(c)
    }
}

solve(-2, 7, 3)
solve(120, 5, 99)
solve(43, 43.2, 43.1)