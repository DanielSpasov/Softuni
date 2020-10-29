function solve(input) {

    let matrix = input.map(row => row.split(' ').map(Number))

    let diagLength = matrix[0].length
    let diagSum1 = 0
    let diagSum2 = 0

    for (let i = 0; i < diagLength; i++) {
        diagSum1 += matrix[i][i]
    }

    row = diagLength - 1
    for (let i = 0; i < diagLength; i++) {
        diagSum2 += matrix[row][i]
        row--
    }

    if(diagSum1 !== diagSum2){
        for(row of matrix){
            console.log(row.join(' '))
        }
    } else {

        for(row in matrix){
            for(num in row){
                
            }
        }

        for(row of matrix){
            console.log(row.join(' '))
        }
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])

solve(['1 1 1',
    '1 1 1',
    '1 1 0'])