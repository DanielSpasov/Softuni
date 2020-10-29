function solve(input) {

    let days = +input.shift()

    let income = 0
    let totalIncome = 0
    let gamesWon = 0
    let gamesLost = 0
    let totalWins = 0
    let totalLoses = 0

    for (let i = 0; i < days; i++) {
        let command = input.shift()

        while(command !== "Finish"){
            let command2 = input.shift()

            if(command2 === "win"){
                income += 20
                gamesWon++
                totalWins++
            } else if(command2 === "lose"){
                income += 0
                gamesLost++
                totalLoses++
            }

            command = input.shift()
        }

        if(gamesWon > gamesLost){
            income = income * 1.10
        } else if(gamesLost > gamesWon){
            income = income
        }

        totalIncome += income
        gamesWon = 0
        gamesLost = 0
        income = 0
    }
    if(totalWins > totalLoses){
        totalIncome = totalIncome * 1.20
        console.log(`You won the tournament! Total raised money: ${totalIncome.toFixed(2)}`)
    } else if(totalLoses > totalWins){
        console.log(`You lost the tournament! Total raised money: ${totalIncome.toFixed(2)}`)
    }
}

solve([2,"volleyball","win","football","lose","basketball","win","Finish","golf","win","tennis","win","badminton","win","Finish"])
solve([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ])