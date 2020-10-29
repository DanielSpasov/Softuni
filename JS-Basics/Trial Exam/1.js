function solve(input){

    let foodMoney = +input.shift()
    let souvenirs = +input.shift()
    let hotelPrice = +input.shift()

    let fuelPrice = (420 / 100 * 7) * 1.85
    let days3money = 3 * foodMoney + 3 * souvenirs
    let hotelDay1 = hotelPrice * 0.90
    let hotelDay2 = hotelPrice * 0.85
    let hotelDay3 = hotelPrice * 0.80
    
    let total = hotelDay1 + hotelDay2 + hotelDay3 + days3money + fuelPrice
    console.log(`Money needed: ${total.toFixed(2)}`)
}

solve([200,200,1000])