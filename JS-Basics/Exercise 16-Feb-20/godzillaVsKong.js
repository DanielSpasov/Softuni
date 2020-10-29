function solve(input){

    // Input
    let budget = Number(input.shift())
    let statists = Number(input.shift())
    let priceForClothing = Number(input.shift())

    let decor = budget * 0.10
    let statistsWardobe = statists * priceForClothing

    if(statists > 150){
        let discout = statistsWardobe * 0.10
        let afterDiscount = statistsWardobe - discout

        let totalMoney = decor + afterDiscount
        let moneyLeft = budget - totalMoney

        if(totalMoney < budget){
            console.log(`Action!\nWingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
        }else {
            moneyFixed = Math.abs(moneyLeft)
            console.log(`Not enough money!\nWingard needs ${moneyFixed.toFixed(2)} leva more.`)
        }
    } else if(statists < 150){
        let totalMoney = decor + statistsWardobe
        let moneyLeft = budget - totalMoney

        if(totalMoney > budget){
            moneyFixed = Math.abs(moneyLeft)
            console.log(`Not enough money!\nWingard needs ${moneyFixed.toFixed(2)} leva more.`)
        } else {
            console.log(`Action!\nWingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
        }
    }
}

solve([
    9587.88,
222,
55.68
])