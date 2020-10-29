function solve(input) {

    let mainDiagSum = 0
    let secDiagSum = 0
    let diagonalLength = input.length - 1

    let mainColumn = 0
    for(let i = 0; i <= diagonalLength; i++){
        mainDiagSum += input[i][mainColumn]
        mainColumn++
    }

    let secColumn = diagonalLength
    for(let i = 0; i <= diagonalLength; i++){
        secDiagSum += input[i][secColumn]
        secColumn--
    }

    console.log(`${mainDiagSum} ${secDiagSum}`)
}

solve([[20, 40],
[10, 60]])

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])