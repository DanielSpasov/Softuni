function solve(input){

    let priceForSinger = +input.shift()
    let guestCount = 0
    let totalPrice = 0

    let command = input.shift()

    while(command !== "The restaurant is full"){
        command = +(command)

        if(command >= 5){
            guestCount += command
            totalPrice += command * 70
        } else {
            guestCount += command
            totalPrice += command * 100
        }
        command = input.shift()
    }
    if(totalPrice >= priceForSinger){
        let diff = totalPrice - priceForSinger
        console.log(`You have ${guestCount} guests and ${diff} leva left.`)
    } else {
        console.log(`You have ${guestCount} guests and ${totalPrice} leva income, but no singer.`)
    }
}

solve([2800,5,5,4,6,6,12,12,"The restaurant is full"])