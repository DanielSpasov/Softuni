function solve(sentence, keyWord){

    sentence = sentence.split(' ')
    let occs = 0
    for(word of sentence){
        if(word === keyWord){
            occs++
        }
    }
    console.log(occs)
}

solve('This is a word and it also is a sentence', 'is')