function solve(input) {

    let negatives = []
    let positives = []
    let zeros = 0

    for (num of input) {
        if (num < 0) {
            negatives.unshift(num)
        } else if (num >= 0) {
            positives.push(num)
        }
    }

    for (num of negatives) {
        console.log(num)
    }
    for (num of positives) {
        console.log(num)
    }
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])