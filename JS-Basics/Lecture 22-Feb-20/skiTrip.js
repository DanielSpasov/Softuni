function solve(input){

    let days = Number(input.shift())
    let room = input.shift()
    let grade = input.shift()

    let roomForOnePersonPrice = 18.00
    let apartmentPrice = 25.00
    let persidentApartmentPrice = 35.00

    let nights = days - 1
    let result = 0

    switch(room){
        case "room for one person":
            switch(grade){
                case "positive":
                    result = (nights * roomForOnePersonPrice) * 1.25
                    console.log(result.toFixed(2)); break
                case "negative":
                    result = (nights * roomForOnePersonPrice) * 0.90
                    console.log(result.toFixed(2)); break
            } break
        case "apartment":
            if(nights < 10){
                result = (nights * apartmentPrice) * 0.70
                if(grade == "positive"){
                    result = result * 1.25
                    console.log(result.toFixed(2))
                } else if(grade == "negative"){
                    result = result * 0.90
                    console.log(result.toFixed(2))
                }
            } else if(nights >= 10 && nights < 15){
                result = (nights * apartmentPrice) * 0.65
                if(grade == "positive"){
                    result = result * 1.25
                    console.log(result.toFixed(2))
                } else if(grade == "negative"){
                    result = result * 0.90
                    console.log(result.toFixed(2))
                }
            } else if(nights >= 15){
                result = (nights * apartmentPrice) * 0.50
                if(grade == "positive"){
                    result = result * 1.25
                    console.log(result.toFixed(2))
                } else if(grade == "negative"){
                    result = result * 0.90
                    console.log(result.toFixed(2))
                }
            } break
        case "president apartment":
            if(nights < 10){
                result = (nights * persidentApartmentPrice) * 0.90
                if(grade == "positive"){
                    result = result * 1.25
                    console.log(result.toFixed(2))
                } else if(grade == "negative"){
                    result = result * 0.90
                    console.log(result.toFixed(2))
                }
            } else if(nights >= 10 && nights < 15){
                result = (nights * presidentApartmentPrice) * 0.85
                if(grade == "positive"){
                    result = result * 1.25
                    console.log(result.toFixed(2))
                } else if(grade == "negative"){
                    result = result * 0.90
                    console.log(result.toFixed(2))
                }
            } else if(nights >= 15){
                result = (nights * persidentApartmentPrice) * 0.80
                if(grade == "positive"){
                    result = result * 1.25
                    console.log(result.toFixed(2))
                } else if(grade == "negative"){
                    result = result * 0.90
                    console.log(result.toFixed(2))
                }
            }
    }
}

solve([
    30,
    "president apartment",
    "negative"
])