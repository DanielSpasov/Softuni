function solve(input) {

    let product = input.shift()
    let count = +input.shift()
    let budget = +input.shift()

    let vowelsSum = 0
    let othersSum = 0

    for (let i = 0; i < product.length; i++) {
        let char = product[i]
        if (char === 'a') {
            vowelsSum += 3
        } else if (char === 'e') {
            vowelsSum += 3
        } else if (char === 'o') {
            vowelsSum += 3
        } else if (char === 'i') {
            vowelsSum += 3
        } else if (char === 'y') {
            vowelsSum += 3
        } else if (char === 'u') {
            vowelsSum += 3
        } else {
            othersSum += 1
        }
    }
    let totalSum = (othersSum + vowelsSum) * count

    if(totalSum <= budget){
        let moneyLeft = Math.abs(totalSum - budget)
        console.log(`${product} bought. Money left: ${moneyLeft.toFixed(2)}`)
    } else {
        console.log(`Cannot buy ${product}. Product value: ${totalSum.toFixed(2)}`)
    }
}

solve(["apple", 2, 20])
solve(["milk", 1.4, 8])