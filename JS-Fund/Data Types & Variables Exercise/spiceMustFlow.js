function solve(yield) {

    let extractedSpice = 0
    let days = 0

    while (yield >= 100) {
        days++
        extractedSpice += yield
        
        extractedSpice -= 26
        yield -= 10

        if(yield < 100){
            extractedSpice -= 26
        }
    }
    console.log(days)
    console.log(extractedSpice)
}

solve(111)
solve(450)
// solve(200)