function solve(input) {

    let firstString = input.substring(0, input.length / 2)
    let secondString = input.substring((input.length / 2), input.length)

    let wordOne = ''
    for (let i = firstString.length - 1; i >= 0; i--) {
        wordOne += firstString[i]
    }
    console.log(wordOne)

    let wordTwo = ''
    for (let i = secondString.length - 1; i >= 0; i--) {
        wordTwo += secondString[i]
    }
    console.log(wordTwo)
}

solve('tluciffiDsIsihTgnizamAoSsIsiht')
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmi')