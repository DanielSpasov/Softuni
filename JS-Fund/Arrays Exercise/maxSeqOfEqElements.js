function solve(input) {
    
    let longestSequence = []
    let leftMostIndex = 0
 
    for (let i = 0; i < input.length; i++) {
        currentNum = +input[i]
        let sequence = [currentNum]
 
        for (let j = i + 1; j < input.length; j++) {
            let nextNum = +input[j]
 
            if (nextNum === currentNum) {
                sequence.push(nextNum)
            } else {
                break
            }
 
        }
 
        if (sequence.length > longestSequence.length) {
            longestSequence = []

            for (let j = 0; j < sequence.length; j++) {
                longestSequence.push(sequence[j])
            }

        } else if (sequence.length === longestSequence.length) {

            if (i < leftMostIndex) {
                leftmostIndex = i
            }
        }
    }

    console.log(longestSequence.join(' '))
}

solve()