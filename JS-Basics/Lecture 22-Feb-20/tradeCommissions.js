function solve(input){

    let city = input.shift()
    let sellings = Number(input.shift())

    let result = 0

    switch(city){
        case "Sofia":
            if(sellings >= 0 && sellings <= 500){
                result = sellings * 0.05
                console.log(result.toFixed(2))
            } else if(sellings > 500 && sellings <= 1000){
                result = sellings * 0.07
                console.log(result.toFixed(2))
            } else if(sellings > 1000 && sellings <= 10000){
                result = sellings * 0.08
                console.log(result.toFixed(2))
            } else if(sellings > 10000){
                result = sellings * 0.12
                console.log(result.toFixed(2))
            } else if(sellings < 0){
                console.log("error")
            }break
        case "Varna":
            if(sellings >= 0 && sellings <= 500){
                result = sellings * 0.045
                console.log(result.toFixed(2))
            } else if(sellings > 500 && sellings <= 1000){
                result = sellings * 0.075
                console.log(result.toFixed(2))
            } else if(sellings > 1000 && sellings <= 10000){
                result = sellings * 0.10
                console.log(result.toFixed(2))
            } else if(sellings > 10000){
                result = sellings * 0.13
                console.log(result.toFixed(2))
            } else if(sellings < 0){
                console.log("error")
            }break
        case "Plovdiv":
            if(sellings >= 0 && sellings <= 500){
                result = sellings * 0.055
                console.log(result.toFixed(2))
            } else if(sellings > 500 && sellings <= 1000){
                result = sellings * 0.08
                console.log(result.toFixed(2))
            } else if(sellings > 1000 && sellings <= 10000){
                result = sellings * 0.12
                console.log(result.toFixed(2))
            } else if(sellings > 10000){
                result = sellings * 0.145
                console.log(result.toFixed(2))
            } else if(sellings < 0){
                console.log("error")
            }break
        default: console.log("error")
    }
}

solve([
    "Kaspichan",
    -50
])