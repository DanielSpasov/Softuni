function solve(sentence, word) {

    let cWord = '*'.repeat(word.length)
    
    while(sentence.includes(word)){
        sentence = sentence.replace(word, cWord)
    }
    console.log(sentence)
}

solve('A small sentence with some words', 'small')