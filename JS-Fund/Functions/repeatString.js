function solve(string, repeat) {

    let result = ''

    for (let i = 0; i < repeat; i++) {
        result += string
    }
    console.log(result)
}

solve('abc', 3)
solve('String', 2)