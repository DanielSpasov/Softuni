function solve(string, char, result) {

    let res = string.replace('_', char)

    if(res === result){
        console.log('Matched')
    } else {
        console.log('Not Matched')
    }
}

solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')