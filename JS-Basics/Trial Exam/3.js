function solve(input){

    let sushiType = input.shift()
    let restaurant = input.shift()
    let numOfPortions = +input.shift()
    let delivery = input.shift()

    let totalPrice = 0

    switch(sushiType){
        case "sashimi":
            switch(restaurant){
                case "Sushi Zone":
                    totalPrice += numOfPortions * 4.99
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Sushi Time":
                    totalPrice += numOfPortions * 5.49
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Sushi Bar":
                    totalPrice += numOfPortions * 5.25
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Asian Pub":
                    totalPrice += numOfPortions * 4.50
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                default:
                    console.log(`${restaurant} is invalid restaurant!`)
                    break
            }
            break
        case "maki":
            switch(restaurant){
                case "Sushi Zone":
                    totalPrice += numOfPortions * 5.29
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Sushi Time":
                    totalPrice += numOfPortions * 4.69
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Sushi Bar":
                    totalPrice += numOfPortions * 5.55
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Asian Pub":
                    totalPrice += numOfPortions * 4.80
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                default:
                    console.log(`${restaurant} is invalid restaurant!`)
                    break
            }
            break
        case "uramaki":
            switch(restaurant){
                case "Sushi Zone":
                    totalPrice += numOfPortions * 5.99
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Sushi Time":
                    totalPrice += numOfPortions * 4.49
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Sushi Bar":
                    totalPrice += numOfPortions * 6.25
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Asian Pub":
                    totalPrice += numOfPortions * 5.50
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                default:
                    console.log(`${restaurant} is invalid restaurant!`)
                    break
            }
            break
        case "temaki":
            switch(restaurant){
                case "Sushi Zone":
                    totalPrice += numOfPortions * 4.29
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Sushi Time":
                    totalPrice += numOfPortions * 5.19
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Sushi Bar":
                    totalPrice += numOfPortions * 4.75
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                case "Asian Pub":
                    totalPrice += numOfPortions * 5.50
                    if(delivery === "Y"){
                        console.log(`Total price: ${Math.ceil(totalPrice * 1.20)} lv.`)
                    }
                    if(delivery === "N"){
                        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
                    }
                    break
                default:
                    console.log(`${restaurant} is invalid restaurant!`)
                    break
            }
            break
    }
}

solve(['maki',"SASA",4,"Y"])