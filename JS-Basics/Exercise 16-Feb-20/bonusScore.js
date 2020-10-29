function solve(input){

    let points = Number(input.shift())
    let bonus = 0.0

    if(points > 1000){
        bonus = points * 0.10
    } else if(points > 100){
        bonus = points * 0.20
    } else if(points <= 100){
        bonus = + 5
    }

    if(points % 2 === 0){
        bonus = bonus + 1
    } else if(points % 10 === 5){
        bonus = bonus + 2
    }

    // console.log(points)
    console.log(bonus)
    console.log(points + bonus)
}

solve([2703])