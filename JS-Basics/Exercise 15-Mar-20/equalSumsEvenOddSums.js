function solve(input) {

    let num1 = +input.shift()
    let num2 = +input.shift()

    let output = ""

    for (let num = num1; num <= num2; num++) {

        let evenSum = 0
        let oddSum = 0

        let currentNumber = num.toString()

        for (let i = 0; i < currentNumber.length; i++) {

            let value = +currentNumber.charAt(i)

            if (i % 2 === 0) {
                evenSum += value
            } else {
                oddSum += value
            }
        }
        if(evenSum === oddSum){
            output += currentNumber + " "
        }
    }
    console.log(output)
}

solve([299900,300000])