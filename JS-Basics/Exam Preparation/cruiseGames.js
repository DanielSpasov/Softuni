function solve(input) {

    let name = input.shift()
    let gamesPlayed = +input.shift()

    let volleyballScore = 0
    let tennisScore = 0
    let badmintonScore = 0

    let volleyballGames = 0
    let tennisGames = 0
    let badmintonGames = 0

    for (let i = 0; i < gamesPlayed; i++) {
        let gameName = input.shift()
        let points = +input.shift()

        switch(gameName){
            case "volleyball":
                volleyballGames++
                volleyballScore += points * 1.07
                break
            case "tennis":
                tennisGames++
                tennisScore += points * 1.05
                break
            case "badminton":
                badmintonGames++
                badmintonScore += points * 1.02
                break
        }
    }
    let vAvg = volleyballScore / volleyballGames
    let tAvg = tennisScore / tennisGames
    let bAvg = badmintonScore / badmintonGames

    let totalPoints = volleyballScore + tennisScore + badmintonScore

    if(vAvg > 75 && tAvg > 75 && bAvg > 75){
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(totalPoints)} points.`)
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(totalPoints)}.`)
    }
}

solve(["Pepi", '3', "volleyball", '78', "tennis", '98', "badminton", '105'])
solve(['Annie', '5', 'badminton', '34', 'tennis', '76', 'badminton', '10', 'volleyball', '62', 'badminton', '56'])
solve(['Ivan', '7', 'volleyball', '70', 'tennis', '100', 'badminton', '64', 'volleyball', '125', 'tennis', '62', 'tennis', '72', 'badminton', '87'])