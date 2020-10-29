function solve(input){

    let jurneyPrice = Number(input.shift())

    let puzzles = Number(input.shift())
    let dolls = Number(input.shift())
    let bears = Number(input.shift())
    let minions = Number(input.shift())
    let trucks = Number(input.shift())

    let countOfToys = puzzles + dolls + bears + minions + trucks

    let price = puzzles * 2.60 + dolls * 3.00 + bears * 4.10 + 
        minions * 8.20 + trucks * 2.00

    if(countOfToys >= 50){
        price = price * 0.75
    }

    price = price * 0.90

    if(jurneyPrice <= price){
        console.log(`Yes! ${(price - jurneyPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(jurneyPrice - price).toFixed(2)} lv needed.`)
    }
}

solve([
    320,
8,
2,
5,
5,
1
])