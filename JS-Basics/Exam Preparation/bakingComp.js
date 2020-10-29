function solve(input) {

    let contestants = +input.shift()

    let cookiesCount = 0
    let cakesCount = 0
    let wafflesCount = 0

    let totalCookies = 0
    let totalCakes = 0
    let totalWaffles = 0

    for (let i = 0; i < contestants; i++) {
        let command = input.shift()

        while(command !== "Stop baking!"){
            let desert = input.shift()

            if(desert === "Stop baking!"){
                console.log(`${command} baked ${cookiesCount} cookies, ${cakesCount} cakes and ${wafflesCount} waffles.`)
                cookiesCount = 0
                cakesCount = 0
                wafflesCount = 0
                break
            }
                
            let count = +input.shift()
            
            switch(desert){
                case "cookies":
                    cookiesCount += count
                    totalCookies += count
                    break
                case "cakes":
                    cakesCount += count
                    totalCakes += count
                    break
                case "waffles":
                    wafflesCount += count
                    totalWaffles += count
                    break
            }
        }
    }
    let totalCount = totalCookies + totalCakes + totalWaffles
    let totalIncome = (totalCookies * 1.50) + (totalCakes * 7.80) + (totalWaffles * 2.30)

    console.log(`All bakery sold: ${totalCount}`)
    console.log(`Total sum for charity: ${totalIncome.toFixed(2)} lv.`)
}

solve([
    '3', 'Iva',
    'cookies', '5',
    'cakes', '3',
    'Stop baking!', 'George',
    'cakes', '7',
    'waffles', '2',
    'Stop baking!', 'Ivan',
    'cookies', '6',
    'Stop baking!'
])