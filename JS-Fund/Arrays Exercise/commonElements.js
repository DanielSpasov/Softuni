function solve(firstArr, secondArr) {

    for (let char of firstArr) {
        for (let char2 of secondArr) {
            if (char === char2) {
                console.log(char)
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
solve(['S', 'o', 'f', 't', 'U', 'n', 'i'], ['s', 'o', 'c', 'i', 'a', 'l'])