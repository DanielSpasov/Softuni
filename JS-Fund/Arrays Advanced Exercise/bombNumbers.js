function bombNumbers(input, arr) {
    let [target, power] = arr

    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i]

        if (currentNum === target) {
            let startIndex = Math.max(0, i - power)
            let countToEnd = power * 2 + 1

            input.splice(startIndex, countToEnd)
            i = i - power - 1
        }
    }
    console.log(input.reduce((a, b) => a + b, 0))
}