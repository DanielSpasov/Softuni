function solve(input) {

    let examHours = +input.shift()
    let examMins = +input.shift()
    let arrivalHours = +input.shift()
    let arrivalMins = +input.shift()

    let examTime = examHours * 60 + examMins
    let arrivalTime = arrivalHours * 60 + arrivalMins

    let diff = examTime - arrivalTime


    if (diff < 0) {
        if (diff > -60) {
            console.log(`late ${Math.abs(diff)} minutes after the start`)
        } else {
            let hours = Math.floor(Math.abs(diff) / 60)
            let mins = diff % 60

	    if (mins > -10 && mins <= 0) {
                console.log(`late ${hours}:0${Math.abs(mins)} hours after the start`)
            } else {
                console.log(`late ${hours}:${Math.abs(mins)} hours after the start`)

            }

        }



    } else if (diff <= 30 && diff >= 0) {
        console.log(`on time ${diff} minutes before the start`)



    } else {
        if (diff < 60 && diff > 30) {
            console.log(`early ${diff} minutes before the start`)
        } else {
            let hours = Math.floor(diff / 60)
            let mins = diff % 60

            if (mins < 10) {
                console.log(`early ${hours}:0${mins} hours before the start`)
            } else {
                console.log(`early ${hours}:${mins} hours before the start`)

            }
        }
    }
}

solve([9,
    00,
    10,
    30])
