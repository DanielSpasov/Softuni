function solve(sentence){

    sentence = sentence.split(' ')
    for(word of sentence){
        if(word.startsWith('#') && word.length > 1){
            word = word.substring(1, word.length)
            if(!/[^a-zA-Z]/.test(word)){
                console.log(word)
            }
        }
    }
}

solve('Nowdays everyone uses # to tag #special word in #socialMedia and #social14media')