function solve(input){

    let num = +input.shift()
    let sum = 0

    for(let n = 0; n < num; n++){
        let currentNum = +input.shift()
        sum += currentNum
    }
    console.log(sum)
}

solve([
    2,
    10,
    20,
])