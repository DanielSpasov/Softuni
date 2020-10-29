function solve(input) {

    let number = input.shift()
    let num3 = number.charAt(2)
    let num2 = number.charAt(1)
    let num1 = number.charAt(0)

    for (let i = 1; i <= num3; i++) {
        for (let j = 1; j <= num2; j++) {
            for (let k = 1; k <= num1; k++) {
                console.log(`${i} * ${j} * ${k} = ${i*j*k};`)
            }
        }
    }
}

solve(['324'])