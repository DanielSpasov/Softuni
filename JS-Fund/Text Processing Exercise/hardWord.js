function solve(input) {

    let text = input[0]
    let words = input[1]

    let arrText = text.split(' ')
    let spaces = []

    for(word of arrText){
        if(word.includes('_')){
            if(word.includes('.')){
                word = word.split('.')
                word = word[0]
            }
            if(word.includes('-')){
                word = word.split('-')
                word = word[0]
            }
            if(word.includes(',')){
                word = word.split(',')
                word = word[0]
            }
            spaces.push(word)
        }
    }

    for(space of spaces){
        let index = text.indexOf(space)
        let lengthOfWord = space.length
        let replaceWord
        for(word of words){
            if(lengthOfWord === word.length){
                replaceWord = word
            }
        }
        text = text.replace(space, replaceWord)
    }
    console.log(text)
}

solve([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    [
        'pie',
        'bring',
        'glad',
        'During',
        'amazing',
        'pharmacist',
        'sprained'
    ]
])