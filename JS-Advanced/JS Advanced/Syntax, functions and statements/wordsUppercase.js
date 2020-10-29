function solve(arg){

    let matchesArr = arg.match(/[A-Za-z0-9]+/g)
    console.log(matchesArr.join(', ').toUpperCase())
}

solve('Hi, how are you?')
solve('hello')