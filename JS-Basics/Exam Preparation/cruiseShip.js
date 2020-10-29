function solve(input){

    let cruiseType = input.shift()
    let cabin = input.shift()
    let nights = +input.shift()

    let tax = 0

    switch(cruiseType){
        case "Mediterranean":
            switch(cabin){
                case "standard cabin":
                    tax += 27.50 * 4

                    break
                case "cabin with balcony":
                    tax += 30.20 * 4

                    break
                case "apartment":
                    tax += 40.50 * 4

                    break
            }
            break
        case "Adriatic":
            switch(cabin){
                case "standard cabin":
                    tax += 22.99 * 4

                    break
                case "cabin with balcony":
                    tax += 25.00 * 4

                    break
                case "apartment":
                    tax += 34.99 * 4

                    break
            }
            break
        case "Aegean":
            switch(cabin){
                case "standard cabin":
                    tax += 23.00 * 4

                    break
                case "cabin with balcony":
                    tax += 26.60 * 4

                    break
                case "apartment":
                    tax += 39.80 * 4

                    break
            }
            break
    }

    if(nights <= 7){
        console.log(`Annie's holiday in the ${cruiseType} sea costs ${(nights * tax).toFixed(2)} lv.`)
    } else {
        console.log(`Annie's holiday in the ${cruiseType} sea costs ${(nights * tax * 0.75).toFixed(2)} lv.`)
    }
}

solve(["Adriatic","apartment",5])
solve(["Aegean","standard cabin",10])