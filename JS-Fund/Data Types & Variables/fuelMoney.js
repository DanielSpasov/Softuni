function solve(distance, passengers, dieselPrice){

    let neededFuel = (distance / 100) * 7
    neededFuel += passengers * 0.100
    let money = neededFuel * dieselPrice
    console.log(`Needed money for that trip is ${money}lv.`)
}

solve(260, 9, 2.49)
solve(90, 14, 2.88)