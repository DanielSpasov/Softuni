function solve(input) {

    let pairs = 0

    // Find on rows
    for (arr of input) {
        for (i in arr) {
            if (arr[i] === arr[+i + 1]) {
                pairs++
            }
        }
    }

    // Find on columns
    for (arr in input) {
        for (i in input[arr]) {
            if(arr < input.length - 1){
                if(input[arr][i] === input[+arr + 1][i]){
                    pairs++
                }
            }
        }
    }
    console.log(pairs)
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])

// solve([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']])