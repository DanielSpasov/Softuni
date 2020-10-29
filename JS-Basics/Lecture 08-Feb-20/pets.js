function solve(input){
    let dogs = Number(input.shift())
    let otherPets = Number(input.shift())

    let taxDogs = 2.50
    let taxOthers = 4

    let finalNotRounded = dogs * taxDogs + otherPets * taxOthers
    let final = finalNotRounded.toFixed(2)

    console.log(`${final} lv.`)
}

solve([
    '5',
    '13',
    '2.50',
    '4'
])