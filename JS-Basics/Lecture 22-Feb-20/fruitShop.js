function solve(input){

    let fruit = input.shift()
    let day = input.shift()
    let count = Number(input.shift())

    let bananaPrice = 2.50
    let applePrice = 1.20
    let orangePrice = 0.85
    let grapefruitPrice = 1.45
    let kiwiPrice = 2.70
    let pineapplePrice = 5.50
    let grapesPrice = 3.85

    let bananaPriceWeekend = 2.70
    let applePriceWeekend = 1.25
    let orangePriceWeekend = 0.90
    let grapefruitPriceWeekend = 1.60
    let kiwiPriceWeekend = 3.00
    let pineapplePriceWeekend = 5.60
    let grapesPriceWeekend = 4.20

    let result = 0;

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit){
                case "banana":
                    result = count * bananaPrice
                    console.log(result.toFixed(2)); break
                case "apple":
                    result = count * applePrice
                    console.log(result.toFixed(2)); break
                case "orange":
                    result = count * orangePrice
                    console.log(result.toFixed(2)); break
                case "grapefruit":
                    result = count * grapefruitPrice
                    console.log(result.toFixed(2)); break
                case "kiwi":
                    result = count * kiwiPrice
                    console.log(result.toFixed(2)); break
                case "pineapple":
                    result = count * pineapplePrice
                    console.log(result.toFixed(2)); break
                case "grapes":
                    result = count * grapesPrice
                    console.log(result.toFixed(2)); break
                default: console.log("error")
            }break
        case "Saturday":
        case "Sunday":
            switch(fruit){
                case "banana":
                    result = count * bananaPriceWeekend
                    console.log(result.toFixed(2)); break
                case "apple":
                    result = count * applePriceWeekend
                    console.log(result.toFixed(2)); break
                case "orange":
                    result = count * orangePriceWeekend
                    console.log(result.toFixed(2)); break
                case "grapefruit":
                    result = count * grapefruitPriceWeekend
                    console.log(result.toFixed(2)); break
                case "kiwi":
                    result = count * kiwiPriceWeekend
                    console.log(result.toFixed(2)); break
                case "pineapple":
                    result = count * pineapplePriceWeekend
                    console.log(result.toFixed(2)); break
                case "grapes":
                    result = count * grapesPriceWeekend
                    console.log(result.toFixed(2)); break
                default: console.log("error")
            }break
        default: console.log("error")

    }
}

solve([
    "tomato",
    "Monday",
    0.5
])