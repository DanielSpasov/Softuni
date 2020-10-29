function solve(x1, y1, x2, y2) {

    let xDiff = x1 - x2
    let yDiff = y1 - y2
    let result = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff))
    console.log(result)
}

solve(2, 4, 5, 0)
solve(2.34, 15.66, -13.55, -2.9985)