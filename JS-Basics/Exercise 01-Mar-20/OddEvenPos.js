function solve(input) {

    let n = +input.shift()
    
    let evenSum = 0
    let evenMin = 1000000000.0
    let evenMax = -1000000000.0
    let oddSum = 0
    let oddMin = 1000000000.0
    let oddMax = -1000000000.0

    for (let i = 1; i <= n; i++) {
        let number = +input.shift()

        if(i % 2 === 0){
            evenSum += number

            if(number > evenMax){
                evenMax = number
            }
            if(number < evenMin){
                evenMin = number
            }

        } else {
            oddSum += number

            if(number > oddMax){
                oddMax = number
            }
            if(number < oddMin){
                oddMin = number
            }
        }
    }


    console.log(`OddSum=${oddSum.toFixed(2)},`)

    if(oddMin === 1000000000.0){
        console.log(`OddMin=No,`)
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`)
    }

    if(oddMax === -1000000000.0){
        console.log(`OddMax=No,`)
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`)
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`)

    if(evenMin === 1000000000.0){
        console.log(`EvenMin=No,`)
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`)
    }
    
    if(evenMax === -1000000000.0){
        console.log(`EvenMax=No`)
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`)
    }
}

solve([10,
    -4.5,
    3433.5,
    -180.33,
    323.2,
    -55.55,
    28.28,
    -30.30,
    44.44,
    -77.77,
    88.88,])