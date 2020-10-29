function solve(input){

    let width = +input.shift()
    let length = +input.shift()
    let height = +input.shift()
    let astonautH = +input.shift()

    let rocketV = width * length * height
    let roomV = (astonautH + 0.40) * 2 * 2
    
    let result = Math.floor(rocketV / roomV)
    
    if(result < 3){
        console.log(`The spacecraft is too small.`)
    } else if(result > 10){
        console.log(`The spacecraft is too big.`)
    } else {
        console.log(`The spacecraft holds ${result} astronauts.`)
    }
}

solve([3.5,4,5,1.70])