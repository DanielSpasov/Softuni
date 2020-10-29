function solve(input){

    input = input.split(' ')
    let words = new Map()
    
    for(let word of input){
        word = word.toLowerCase()
        if(!words.has(word)){
            words.set(word, 1)
        } else {
            let count = words.get(word)
            count++
            words.set(word, count)
        }
    }
    
    let arr = Array.from(words)
    let output = []

    for(let kvp of arr){
        if(kvp[1] % 2 == 1){
            output.push(kvp[0])
        }
    }

    console.log(output.join(' '))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')