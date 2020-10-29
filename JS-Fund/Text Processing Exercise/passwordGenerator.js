function solve(input){

    const vowels = ['a', 'e', 'i', 'o', 'u']
    let word = input[0] + input[1]
    let replacer = input[2].toUpperCase()

    for(char of word){
        if(vowels.includes(char)){
            word = word.replace(char, '-')
        }
    }

    let counter = 0
    for(char of word){
        if(char === '-'){
            if(counter >= replacer.length){
                counter = 0
            }
            word = word.replace(char, replacer[counter])
            counter++
        }
    }

    let password = ''
    for(let i = word.length - 1; i >= 0; i--){
        password += word[i]
    }

    console.log(`Your generated password is ${password}`)
}

solve(['ilovepizza', 'ihatevegetables', 'orange'])