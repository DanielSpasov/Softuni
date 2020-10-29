function solve(input){

    let numbersCount = +input.shift()

    let minNum = Number.MIN_SAFE_INTEGER
    let maxNum = Number.MAX_SAFE_INTEGER

    for(let number = 0; number < numbersCount; number++){

        let currentNumber = +input.shift()

        if(currentNumber < maxNum){
            maxNum = currentNumber
        }

        if(currentNumber > minNum){
            minNum = currentNumber
        }
    }
    console.log(`Max number: ${minNum}`)
    console.log(`Min number: ${maxNum}`)
}

solve([5,
10,
30,
304,
0,
50
])