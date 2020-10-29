function solve(input) {

    let goldPrice = 67.51
    let bitcoinPrice = 11949.16
    let arrayLength = input.length
    let firstBitcionPurchased = 0
    let bitcoinsPurchased = 0
    let days = 0
    let wallet = 0

    for (let i = 0; i < arrayLength; i++) {
        let minedGold = +input.shift()
        days++

        if (days % 3 == 0) {
            minedGold *= 0.70
        }

        wallet += minedGold * goldPrice

        if (wallet >= bitcoinPrice) {
            if (bitcoinsPurchased == 0) {
                firstBitcionPurchased = days
            }
            
            let temp = Math.floor(wallet / bitcoinPrice)
            for(let i = 0; i < temp; i++){
                bitcoinsPurchased++
                wallet -= bitcoinPrice
            }
        }
    }
    if (bitcoinsPurchased == 0) {
        console.log(`Bought bitcoins: ${bitcoinsPurchased}`)
        console.log(`Left money: ${wallet.toFixed(2)} lv.`)
    } else {
        console.log(`Bought bitcoins: ${bitcoinsPurchased}`)
        console.log(`Day of the first purchased bitcoin: ${firstBitcionPurchased}`)
        console.log(`Left money: ${wallet.toFixed(2)} lv.`)
    }
}

solve([100,200,300])