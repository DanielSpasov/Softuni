function solve(input){

    let coffeePriceSofia = 0.50
    let coffeePricePlovdiv = 0.40
    let coffeePriceVarna = 0.45
    let waterPriceSofia = 0.80
    let waterPricePlovdiv = 0.70
    let waterPriceVarna = 0.70
    let beerPriceSofia = 1.20
    let beerPricePlovdiv = 1.15
    let beerPriceVarna = 1.10
    let sweetsPriceSofia = 1.45
    let sweetsPricePlovdiv = 1.30
    let sweetsPriceVarna = 1.35
    let peanutsPriceSofia = 1.60
    let peanutsPricePlovdiv = 1.50
    let peanutsPriceVarna = 1.55

    let product = input.shift()
    let city = input.shift()
    let count = Number(input.shift())

    if(product == "coffee"){
        if(city == "Sofia"){
            console.log(count * coffeePriceSofia)
        } else if(city == "Plovdiv"){
            console.log(count * coffeePricePlovdiv)
        } else if(city == "Varna"){
            console.log(count * coffeePriceVarna)
        }
    } else if(product == "water"){
        if(city == "Sofia"){
            console.log(count * waterPriceSofia)
        } else if(city == "Plovdiv"){
            console.log(count * waterPricePlovdiv)
        } else if(city == "Varna"){
            console.log(count * waterPriceVarna)
        }
    } else if(product == "beer"){
        if(city == "Sofia"){
            console.log(count * beerPriceSofia)
        } else if(city == "Plovdiv"){
            console.log(count * beerPricePlovdiv)
        } else if(city == "Varna"){
            console.log(count * beerPriceVarna)
        }
    } else if(product == "sweets"){
        if(city == "Sofia"){
            console.log(count * sweetsPriceSofia)
        } else if(city == "Plovdiv"){
            console.log(count * sweetsPricePlovdiv)
        } else if(city == "Varna"){
            console.log(count * sweetsPriceVarna)
        }
    } else if(product == "peanuts"){
        if(city == "Sofia"){
            console.log(count * peanutsPriceSofia)
        } else if(city == "Plovdiv"){
            console.log(count * peanutsPricePlovdiv)
        } else if(city == "Varna"){
            console.log(count * peanutsPriceVarna)
        }
    }
}

solve([
    "peanuts",
    "Plovdiv",
    1
])