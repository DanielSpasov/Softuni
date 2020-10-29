function solve(fruit, grams, pricePerKg){

    let weigthInKg = grams / 1000
    let moneyNeeded = pricePerKg * weigthInKg

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)