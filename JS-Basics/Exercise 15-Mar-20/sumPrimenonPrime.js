function solve(input) {

    let command = input.shift()
    let primeSum = 0
    let nonPrimeSum = 0

    while (command !== "stop") {
        let number = +(command)

        if (number < 0) {
            console.log(`Number is negative.`)
        } else {
            let counter = 0

            for (let i = 1; i <= number; i++) {

                if (number % i === 0) {
                    counter++
                }
            }

            if (counter === 2) {
                primeSum += number
            } else {
                nonPrimeSum += number
            }
        }

        command = input.shift()
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)

}

solve([])