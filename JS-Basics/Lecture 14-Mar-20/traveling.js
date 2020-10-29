function solve(input){

    let country = input.shift()

    while(country !== "End"){
        let neededMoney = +input.shift()
        
        while(neededMoney > 0){
            let saved = +input.shift()

            neededMoney -= saved
        }

        console.log(`Going to ${country}!`)

        country = input.shift()
    }
}

solve(["Greece",
    1000,
    200,
    200,
    300,
    100,
    150,
    240,
    "Spain",
    1200,
    300,
    500,
    193,
    423,
    "End"])