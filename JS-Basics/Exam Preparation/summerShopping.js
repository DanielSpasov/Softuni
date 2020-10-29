function solve(input){

    let budget = +input.shift()
    let towelPrice = +input.shift()
    let discount = +input.shift()

    let umbrellaPrice = towelPrice / 3 * 2
    let flopsPrice = umbrellaPrice * 0.75
    let bagPrice = (towelPrice + flopsPrice) / 3 
    
    let cost = towelPrice + umbrellaPrice + flopsPrice + bagPrice
    let costAftDisc = cost - (cost / 100 * discount)

    let rest = Math.abs(budget - costAftDisc)
    
    if(budget >= costAftDisc){
        console.log(`Annie's sum is ${costAftDisc.toFixed(2)} lv. She has ${rest.toFixed(2)} lv. left.`)
    } else {
        console.log(`Annie's sum is ${costAftDisc.toFixed(2)} lv. She needs ${rest.toFixed(2)} lv. more.`)
    }
}

solve([40,15,5])
solve([25,6,10])
solve([30,17,3])