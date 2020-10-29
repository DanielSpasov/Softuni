function solve(input) {

    let n = +input.shift()
    let oddSum = 0
    let evenSum = 0
    let oddMaxNum = -100000000000000
    let oddMinNum = 100000000000000
    let evenMaxNum = -10000000000000
    let evenMinNum = 10000000000000

    for (let i = 0; i < n; i++) {
        let currentNumber = +input.shift()

        if (i % 2 == 0) {
            oddSum += currentNumber
            if (currentNumber > oddMaxNum) {
                oddMaxNum = currentNumber
            } else if (currentNumber < evenMinNum) {
                oddMinNum = currentNumber
            }
        } else {
            evenSum += currentNumber
            if (currentNumber > evenMaxNum) {
                evenMaxNum = currentNumber
            } else {
                evenMinNum = currentNumber
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`)
    console.log(`OddMin=${oddMinNum.toFixed(2)},`)
    console.log(`OddMax=${oddMaxNum.toFixed(2)},`)
    console.log(`EvenSum=${evenSum.toFixed(2)},`)
    console.log(`EvenMin=${evenMinNum.toFixed(2)},`)
    console.log(`EvenMax=${evenMaxNum.toFixed(2)}`)
}

solve([])