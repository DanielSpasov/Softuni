function solve(input){

    let numberCount = +input.shift()

    let result = Number.MAX_SAFE_INTEGER

    let currentNumber = +input.shift()
    let counter = 1

    while(counter <= numberCount){

        if(currentNumber <= result){
            result = currentNumber
        }

        counter++
        currentNumber = +input.shift()
    }
    console.log(result)
}

solve([4,45,-20,7,99])