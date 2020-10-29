function solve(input) {

    let isReached = false
    let command = input.shift()
    let totalSteps = 0

    while(!isReached){
        let steps = +(command)

        if(command === "Going home"){
            let lastSteps = +input.shift()
            totalSteps += lastSteps
            let diff = 10000 - totalSteps
            
            if(totalSteps >= 10000){
                console.log(`Goal reached! Good job!`)
                break
            } else {
                console.log(`${diff} more steps to reach goal.`)
                break
            }
        }

        if(totalSteps >= 10000){
            isReached = true
            console.log(`Goal reached! Good job!`)
            break
        } else {
            totalSteps += steps
            // console.log(totalSteps)
        }
        command = input.shift()
    }
}

solve([1000,
    1500,
    2000,
    6500,
    ])