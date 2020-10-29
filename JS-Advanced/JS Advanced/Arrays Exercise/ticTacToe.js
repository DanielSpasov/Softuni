function solve(input) { // 90 / 100

    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]]

    let hasWinner = false
    let lastPlayer = 'X'
    let moves = 0
    for (coords of input) {

        moves++
        let [x, y] = coords.split(' ')

        if(moves == 10){
            break
        }
        
        if (board[x][y] !== false) {
            console.log('This place is already taken. Please choose another!')
            continue
        } else {
            board[x][y] = lastPlayer
            if (lastPlayer === 'X') {
                lastPlayer = 'O'
            } else if (lastPlayer === 'O') {
                lastPlayer = 'X'
            }
        }


        // Row Wins
        if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== false) {
            hasWinner = true
        } else if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] !== false) {
            hasWinner = true
        } else if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] !== false) {
            hasWinner = true
        }

        // Column Wins
        if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] !== false) {
            hasWinner = true
        } else if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] !== false) {
            hasWinner = true
        } else if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] !== false) {
            hasWinner = true
        }

        // Diagonal Wins
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== false) {
            hasWinner = true
        } else if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== false) {
            hasWinner = true
        }

        if (hasWinner) {
            if (lastPlayer === 'X') {
                lastPlayer = 'O'
            } else if (lastPlayer === 'O') {
                lastPlayer = 'X'
            }
            console.log(`Player ${lastPlayer} wins!`)
            break
        }
    }

    if (!hasWinner) {
        console.log('The game ended! Nobody wins :(')
    }
    for (row of board) {
        console.log(row.join('	'))
    }
}

// solve(['0 1',
//     '0 0',
//     '0 2',
//     '2 0',
//     '1 0',
//     '1 1',
//     '1 2',
//     '2 2',
//     '2 1',
//     '0 0'])

solve(['0 0',
    '0 0',
    '1 1',
    '0 1',
    '1 2',
    '0 2',
    '2 2',
    '1 2',
    '2 2',
    '2 1'])

solve(['0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 2',
    '1 1',
    '2 1',
    '2 2',
    '0 0'])