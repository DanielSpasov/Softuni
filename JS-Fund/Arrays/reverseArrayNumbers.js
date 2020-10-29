function solve(l, input) {

    let arr = []
    let output = ''

    for (let i = 0; i < l; i++) {
        arr.push(input[i])
    }

    for (let j = arr.length - 1; j >= 0; j--) {
        output += `${arr[j]} `
    }

    console.log(output)
}

solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5,])
solve(2, [66, 43, 75, 89, 47])