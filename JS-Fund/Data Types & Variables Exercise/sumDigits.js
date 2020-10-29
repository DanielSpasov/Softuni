function solve(num) {

    num = num.toString()
    let sum = 0

    for (let i = 0; i < num.length; i++) {
        let currentChar = num[i]
        currentChar = +(currentChar)
        sum += currentChar
    }
    console.log(sum)
}

solve(245678)
solve(97561)
solve(543)