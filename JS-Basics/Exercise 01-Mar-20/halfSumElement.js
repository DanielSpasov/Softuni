function solve(input) {

    let n = +input.shift()

    let sum = 0
    let maxNum = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < n; i++){
        let currentNumber = +input.shift()
        sum += currentNumber

        if(currentNumber > maxNum){
            maxNum = currentNumber
        }
    }

    let result = sum - maxNum

    if(result === maxNum){
        console.log(`Yes\nSum = ${result}`)
    }else {
        console.log(`No\nDiff = ${Math.abs(maxNum - result)}`)
    }
}

solve([3,1,1,10])