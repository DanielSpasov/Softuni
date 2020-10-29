function solve(word){

    let length = word.length
    let result = ''

    for(let i = word.length; i <= length; i--){
        if(i < 0){
            break
        }
        result += `${word.charAt(i)}`
    }
    console.log(result)
}

solve('Hello')
solve('SoftUni')
solve('1234')