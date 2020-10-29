function solve(arr1, arr2) {

    let sum = 0
    let isEqual = true

    for (let i = 0; i < arr1.length; i++) {
        let currentArr1 = +arr1[i]
        let currentArr2 = +arr2[i]

        if (currentArr1 !== currentArr2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isEqual = false
            break
        } else {
            sum += currentArr1
            isEqual = true
        }
    }
    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

solve(['10', '20', '30'], ['10', '20', '30'])
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
solve(['1'], ['10'])