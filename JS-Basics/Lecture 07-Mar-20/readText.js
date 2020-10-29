function solve(input) {

    let word = input.shift()

    while(word !== "Stop"){
        console.log(word)
        word = input.shift()
    }
}

solve([])