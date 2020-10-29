function solve(input){

    let result = ''
    let oldChar

    for(char of input){
        if(oldChar === char){
            continue
        } else {
            result += char
        }

        oldChar = char
    }
    console.log(result)
}

solve('aaaaabbbbbcdddeeeedssaa')
solve('qqqwerqwecccwd')