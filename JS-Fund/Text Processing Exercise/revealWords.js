function solve(words, sentence) {

    words = words.split(', ')

    let templates = []
    for (word of words) {
        let temp = '*'.repeat(word.length)
        templates.push(temp)
    }

    for (temp in templates) {
        if (sentence.includes(templates[temp])) {
            sentence = sentence.replace(templates[temp], words[temp])
        }
    }
    console.log(sentence)
}

solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')