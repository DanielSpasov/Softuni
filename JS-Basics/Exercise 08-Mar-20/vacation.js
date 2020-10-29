function solve(input){

    let moneyForJurney = +input.shift()
    let budget = +input.shift()
    let counterSpend = 0
    let countDay = 0

    while(moneyForJurney > budget){
        countDay++
        let command = input.shift()
        let money = +input.shift()

        if(command === "spend"){
            budget -= money
            if(budget < 0){
                budget = 0
            }
            counterSpend++
        } else {
            budget += money
            counterSpend = 0
        }

        if(counterSpend == 5){
            break
        }
    }
    if(moneyForJurney <= budget){
        console.log(`You saved the money for ${countDay} days.`)
    } else {
        console.log(`You can't save the money.`)
        console.log(`${countDay}`)
    }
}

solve([110,60,"spend",])