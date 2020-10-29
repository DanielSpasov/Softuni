function solve(input) {

    let month = input.shift()
    let nights = +input.shift()

    let apartmentPrice = 0
    let studioPrice = 0

    switch (month) {
        case "May":
        case "October":

            if(nights <= 7){
                let studioPrice = (nights * 50)
                let apartmentPrice = (nights * 65)
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }else if(nights > 7 && nights <= 14){
                let studioPrice = (nights * 50) * 0.95   
                let apartmentPrice = (nights * 65)
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            } else if(nights > 14){
                let studioPrice = (nights * 50) * 0.70
                let apartmentPrice = (nights * 65) * 0.90
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }break

        case "June":
        case "September":

            if(nights <= 14){
                let studioPrice = (nights * 75.20)
                let apartmentPrice = (nights * 68.70)
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }else if(nights > 14){
                let studioPrice = (nights * 75.20) * 0.80
                let apartmentPrice = (nights * 68.70) * 0.90
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }break

        case "July":
        case "August":

            if(nights <= 14){
                let studioPrice = (nights * 76)
                let apartmentPrice = (nights * 77)
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }else if(nights > 14){
                let studioPrice = (nights * 76)
                let apartmentPrice = (nights * 77) * 0.90
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }break
    }
}

solve(["August",20])