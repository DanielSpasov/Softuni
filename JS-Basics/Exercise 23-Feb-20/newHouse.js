function solve(input) {

    let flowerType = input.shift()
    let flowerQuant = +input.shift()
    let budget = +input.shift()

    let result = 0
    let flowersPrice = 0

    switch (flowerType) {
        case "Roses":
            if(flowerQuant > 80){
                flowersPrice = (flowerQuant * 5) * 0.90
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            } else {
                flowersPrice = flowerQuant * 5
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            }break
        case "Dahlias":
            if(flowerQuant > 90){
                flowersPrice = (flowerQuant * 3.80) * 0.85
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            } else {
                flowersPrice = flowerQuant * 3.80
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            }break
        case "Tulips":
            if(flowerQuant > 80){
                flowersPrice = (flowerQuant * 2.80) * 0.85
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            } else {
                flowersPrice = flowerQuant * 2.80
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            }break
        case "Narcissus":
            if(flowerQuant < 120){
                flowersPrice = (flowerQuant * 3) * 1.15
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            } else {
                flowersPrice = flowerQuant * 3
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            }break
        case "Gladiolus":
            if(flowerQuant < 80){
                flowersPrice = (flowerQuant * 2.50) * 1.20
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            } else {
                flowersPrice = flowerQuant * 2.50
                result = Math.abs(budget - flowersPrice)
                if(flowersPrice <= budget){
                    console.log(`Hey, you have a great garden with ${flowerQuant} ${flowerType} and ${result.toFixed(2)} leva left.`)
                } else {
                    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
                }
            }break
    }
}

solve([
    "Narcissus",
    119,
    360
])