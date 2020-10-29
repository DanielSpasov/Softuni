function solve(input){

    let whiskeyPriceLev = Number(input.shift())
    let colBeer = Number(input.shift())
    let colWine = Number(input.shift())
    let colRakija = Number(input.shift())
    let colWhiskey = Number(input.shift())

    let rakijaPrice = whiskeyPriceLev / 2
    let winePrice = rakijaPrice * 0.6
    let beerPrice = rakijaPrice * 0.2
    
    let totalRakija = (rakijaPrice * colRakija)
    let totalBeer = (beerPrice * colBeer)
    let totalWhiskey = (whiskeyPriceLev * colWhiskey)
    let totalWine = (winePrice * colWine)

    let total = totalRakija + totalBeer + totalWhiskey + totalWine

    console.log(total.toFixed(2))
}

solve([
    10,
    50,
    15,
    24,
    6
])