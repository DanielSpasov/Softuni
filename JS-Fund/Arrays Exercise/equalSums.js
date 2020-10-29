function solve(input) {

    let result = 'no'

    for (let i = 0; i < input.length; i++) {

        let leftSum = 0
        let rightSum = 0

        for (let j = 0; j < i; j++) {
            leftSum += input[j]
        }
        for (let k = input.length - 1; k > i; k--) {
            rightSum += input[k]
        }
        
        if (leftSum === rightSum) {
            result = i
            break
        }
    }

    console.log(result)
}

solve()