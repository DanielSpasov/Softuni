function solve(input){

    let degrees = +input.shift()
    let time = input.shift()

    let top = "moccasins"
    let shoes = "shoes"

    switch(time){
        case "Morning":
            if(degrees >= 10 && degrees <= 18){
                top = "Sweatshirt"
                shoes = "Sneakers"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            } else if(degrees > 18 && degrees <=24){
                top = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            } else if(degrees >= 25){
                top = "T-Shirt"
                shoes = "Sandals"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            }break
        case "Afternoon":
            if(degrees >= 10 && degrees <= 18){
                top = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            } else if(degrees > 18 && degrees <=24){
                top = "T-Shirt"
                shoes = "Sandals"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            } else if(degrees >= 25){
                top = "Swim Suit"
                shoes = "Barefoot"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            }break
        case "Evening":
            if(degrees >= 10 && degrees <= 18){
                top = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            } else if(degrees > 18 && degrees <=24){
                top = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            } else if(degrees >= 25){
                top = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${top} and ${shoes}.`)
            }break
    }
}

solve([

])