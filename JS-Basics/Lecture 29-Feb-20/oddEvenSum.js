function solve(input) {

    let num = +input.shift()
    let oddSum = 0
    let evenSum = 0

    for (let i = 0; i < num; i++) {

        let currentNumber = +input.shift()

        if(i % 2 == 0){
            evenSum += currentNumber
        }else {
            oddSum += currentNumber
        }
    }
    if(evenSum == oddSum){
        console.log(`Yes\nSum = ${evenSum}`)
    } else {
        console.log(`No\nDiff = ${Math.abs(evenSum - oddSum)}`)
    }
}


solve([3, 5, 8, 1])