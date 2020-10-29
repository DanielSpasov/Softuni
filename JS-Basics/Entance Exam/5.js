function solve(input){

    let foodInKG = +input.shift()
    let foodInG = foodInKG * 1000

    let dogAte = 0

    let command = input.shift()

    while(command !== "Adopted"){
        command = +(command)
        dogAte += command

        command = input.shift()
    }

    if(dogAte <= foodInG){
        let leftovers = foodInG - dogAte
        console.log(`Food is enough! Leftovers: ${leftovers} grams.`)
    } else {
        let leftovers = Math.abs(foodInG - dogAte)
        console.log(`Food is not enough. You need ${leftovers} grams more.`)
    }
}

solve([4,130,345,400,180,230,120,"Adopted"])
solve([2,999,456,999,999,123,456,"Adopted"])