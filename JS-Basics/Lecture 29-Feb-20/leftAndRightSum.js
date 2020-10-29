function solve(input) {

    let num = +input.shift()
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; num > i; i++) {
        let currentNumber = +input.shift()
        sum1 += currentNumber
    }
    for (let i = 0; num > i; i++) {
        let currentNumber = +input.shift()
        sum2 += currentNumber
    }

    if(sum1 == sum2){
        console.log(`Yes, sum = ${sum1}`)
    } else if(sum1 > sum2){
        let diff = sum1 - sum2
        console.log(`No, diff = ${Math.abs(diff)}`)
    } else if(sum2 > sum1){
        let diff = sum2 - sum1
        console.log(`No, diff = ${Math.abs(diff)}`)
    }
}

solve([10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10])