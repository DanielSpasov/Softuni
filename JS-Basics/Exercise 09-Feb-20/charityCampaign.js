function solve(input){

    let days = Number(input.shift())
    let candyMans = Number(input.shift())
    let cakes = Number(input.shift())
    let waffles = Number(input.shift())
    let pancakes = Number(input.shift())

    let cakePrice = 45
    let wafflePrice = 5.80
    let pancakePrice = 3.20

    let earningsFromCakes = cakePrice * cakes
    // console.log(`Earned ${earningsFromCakes} from Cakes`)
    let earningsFromWaffles = wafflePrice * waffles
    // console.log(`Earned ${earningsFromWaffles} from Waffles`)
    let earningsFromPancakes = pancakePrice * pancakes
    // console.log(`Earned ${earningsFromPancakes} from Pancakes`)

    let earningsForADay = (earningsFromCakes + earningsFromPancakes + earningsFromWaffles) * candyMans
    // console.log(earningsForADay)

    let earningsFor20Days = earningsForADay * days
    // console.log(earningsFor20Days)

    let answer = earningsFor20Days - (earningsFor20Days / 8)
    console.log(`${answer.toFixed(2)}`)
}

solve([
    20,
    8,
    14,
    30,
    16
])