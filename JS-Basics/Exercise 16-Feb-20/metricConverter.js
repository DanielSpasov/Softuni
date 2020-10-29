function solve(input){

    let number = Number(input.shift())
    let fromWhat = input.shift()
    let toWhat = input.shift()
    let outputNumber

    // Milimeters to:
    if(fromWhat === "mm" && toWhat === "m"){
        outputNumber = number / 1000
        console.log(outputNumber.toFixed(3))
    } else if(fromWhat === "mm" && toWhat === "cm"){
        outputNumber = number / 10
        console.log(outputNumber.toFixed(3))
    // Meters to:
    } else if(fromWhat === "m" && toWhat === "mm"){
        outputNumber = number * 1000
        console.log(outputNumber.toFixed(3))
    } else if(fromWhat === "m" && toWhat === "cm"){
        outputNumber = number * 100
        console.log(outputNumber.toFixed(3))
    // Cm to:
    } else if(fromWhat === "cm" && toWhat === "mm"){
        outputNumber = number * 10
        console.log(outputNumber.toFixed(3))
    } else if(fromWhat === "cm" && toWhat === "m"){
        outputNumber = number / 100
        console.log(outputNumber.toFixed(3))
    }
}

solve([
    5000,
    "cm",
    "m"
])