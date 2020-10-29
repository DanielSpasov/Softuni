function oddAndEvenSum(number) {

    let num = number.toString()

    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < num.length; i++) {
        let currentChar = +num[i]

        if (currentChar % 2 == 0) {
            evenSum += currentChar
        } else {
            oddSum += currentChar
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}