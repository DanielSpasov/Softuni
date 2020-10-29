function solve(input){

    let year = input.shift()
    let p = +input.shift()
    let h = +input.shift()

    let gamesInSofia = (48 - h) * 3/4
    let gamesInSofiaH = p * 2/3

    let totalGames = gamesInSofia + gamesInSofiaH + h
    if(year === "leap"){
        totalGames = totalGames * 1.15
        console.log(Math.floor(totalGames))
    } else if(year === "normal"){
        console.log(Math.floor(totalGames))
    }
}

solve(["normal", 6, 13])