function solve(year, month, day) {

    day++
    switch (month) {
        case 1:
            if(day > 31){
                month++
                day = 1
            }
            break
        case 2:
            if(day > 29){
                month++
                day = 1
            }
            break
        case 3:
            if(day > 31){
                month++
                day = 1
            }
            break
        case 4:
            if(day > 30){
                month++
                day = 1
            }
            break
        case 5:
            if(day > 31){
                month++
                day = 1
            }
            break
        case 6:
            if(day > 30){
                month++
                day = 1
            }
            break
        case 7:
            if(day > 31){
                month++
                day = 1
            }
            break
        case 8:
            if(day > 31){
                month++
                day = 1
            }
            break
        case 9:
            if(day > 30){
                month++
                day = 1
            }
            break
        case 10:
            if(day > 31){
                month++
                day = 1
            }
            break
        case 11:
            if(day > 30){
                month++
                day = 1
            }
            break
        case 12:
            if(day > 31){
                month++
                day = 1
            }
            break
    }
    if(month > 12){
        year++
        month = 1
    }
    if(year < 1900){
        year = 1901
    }
    console.log(`${year}-${month}-${day}`)
}

solve(1,1,1)