function solve(input) {

    let words = []
    let wordsReversed = []

    let word = ''
    for (let i = input.length - 1; i >= 0; i--) {
        if (input[i].toLowerCase() === input[i]) {
            word += input[i]
        }
        if (input[i].toUpperCase() === input[i]) {
            word += input[i]
            wordsReversed.push(word)
            word = ''
        }
    }

    for (let j = wordsReversed.length - 1; j >= 0; j--) {
        let newWord = ''
        for (let i = wordsReversed[j].length - 1; i >= 0; i--) {
            newWord += wordsReversed[j][i]
        }
        words.push(newWord)
        newWord = ''
    }

    console.log(words.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')