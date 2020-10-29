function solve(input) {

    let biggestNum = Number.MIN_SAFE_INTEGER

    for (arr of input) {
        for (num of arr) {
            if (num >= biggestNum) {
                biggestNum = num
            }
        }
    }
    console.log(biggestNum)
}

solve([[20, 50, 10],
[8, 33, 145]])

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])