function solve(word, sentence) {

    word = word.toLowerCase()
    let isFound = false
    sentence = sentence.split(' ')
    for(i of sentence){
        i = i.toLowerCase()
        if(i === word){
            console.log(word)
            isFound = true
            break
        }
    }
    if(!isFound){
        console.log(`${word} not found!`)
    }
}

solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language')