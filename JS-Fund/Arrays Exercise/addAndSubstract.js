function solve(input) {

    let newArr = input
    let oldSum = 0
    let newSum = 0

    for (let num of input) {
        oldSum += num
    }

    for (let i = 0; i < input.length; i++) {
        let currentNum = newArr[i]

        if (currentNum % 2 == 0) {
            currentNum += i
            newArr[i] = currentNum
        } else {
            currentNum -= i
            newArr[i] = currentNum
        }
        newSum += currentNum
    }

    console.log(newArr)
    console.log(oldSum)
    console.log(newSum)
}

solve([5, 15, 23, 56, 35])
solve([-5, 11, 3, 0, 2])