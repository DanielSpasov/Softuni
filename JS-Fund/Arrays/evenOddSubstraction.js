function solve(input) {

    let odds = 0
    let evens = 0

    for (let i = 0; i < input.length; i++) {
        let currentNum = +input[i]
        if (currentNum % 2 == 0) {
            evens += currentNum
        } else {
            odds += currentNum
        }
    }
    console.log(evens - odds)
}

solve([1, 2, 3, 4, 5, 6])
solve([3, 5, 7, 9])
solve([2, 4, 6, 8, 10])