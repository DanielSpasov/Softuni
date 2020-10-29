function solve(input){

    let hour = Number(input.shift())
    let minute = Number(input.shift())

    minute = minute + 15

    if(minute >= 60){
        hour++
        let minute2 = minute % 60
        minute = minute2
        if(hour <= 23){
            if(minute < 10){
                console.log(`${hour}:0${minute}`)
            } else {
                console.log(`${hour}:${minute}`)
            }
        } else if(hour = 24){
            hour = 0
            if(minute < 10){
                console.log(`${hour}:0${minute}`)
            } else {
                console.log(`${hour}:${minute}`)
            }
        } else if(hour = 0){
            hour = 1
            if(minute < 10){
                console.log(`${hour}:0${minute}`)
            } else {
                console.log(`${hour}:${minute}`)
            }
        }
    } else if(minute > 10 && minute <= 60){
        console.log(`${hour}:${minute}`)
    }
}

solve([
    12,
    49
])