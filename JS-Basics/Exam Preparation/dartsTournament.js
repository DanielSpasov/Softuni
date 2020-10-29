function solve(input){

    let targetScore = +input.shift()
    let sector = input.shift()
    let points = +input.shift()
    let isDone = false

    let score = 0
    let moves = 0

    while(!isDone){
        switch(sector){
            case "number section":
                score += points
                moves++
                break
            case "double ring":
                score += points * 2
                moves++
                break
            case "triple ring":
                score += points * 3
                moves++
                break
            case "bullseye":
                moves++
                console.log(`Congratulations! You won the game with a bullseye in ${moves} moves!`)
                isDone = true
                break
        }

        let diff = Math.abs(targetScore - score)

        if(score == targetScore){
            console.log(`Congratulations! You won the game in ${moves} moves!`)
            break
        } else if (score > targetScore){
            console.log(`Sorry, you lost. Score difference: ${diff}.`)
            break
        } else if (score < targetScore){
            sector = input.shift()
            points = +input.shift()
        }
    }
}

solve([75,'triple ring',17,'number section',16,'triple ring',13,'double ring',10])