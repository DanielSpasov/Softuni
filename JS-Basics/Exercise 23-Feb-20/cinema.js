function solve(input){

    let type = input.shift()
    let rows = +input.shift()
    let columns = +input.shift()

    let result = 0

    if(type == "Premiere"){
        result = rows * columns * 12.00
        console.log(`${result.toFixed(2)} leva`)
    } else if(type == "Normal"){
        result = rows * columns * 7.50
        console.log(`${result.toFixed(2)} leva`)
    } else if(type = "Discount"){
        result = rows * columns * 5.00
        console.log(`${result.toFixed(2)} leva`)
    }
}

solve([
    "Premiere",
    10,
    12
])