function solve(input) {

    let num1 = +input.shift()
    let num2 = +input.shift()
    let sign = input.shift()

    let result = 0
    let evenOrOdd = ""


    switch (sign) {

        case "+":
            result = num1 + num2
            if(result % 2 == 0){
                evenOrOdd = "even"
                console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`)
            } else {
                evenOrOdd = "odd"
                console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`)
            }break

        case "-":
            result = num1 - num2
            if(result % 2 == 0){
                evenOrOdd = "even"
                console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`)
            } else {
                evenOrOdd = "odd"
                console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`)
            }break

        case "*":
            result = num1 * num2
            if(result % 2 == 0){
                evenOrOdd = "even"
                console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`)
            } else {
                evenOrOdd = "odd"
                console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`)
            }break

        case "/":
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`)
            } else {
                result = num1 / num2
                console.log(`${num1} ${sign} ${num2} = ${result.toFixed(2)}`)
            }break

        case "%":
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`)
            } else {
                result = num1 % num2
                console.log(`${num1} ${sign} ${num2} = ${result}`)
            }break
    }
}

solve([10,
    3,
    "%"])