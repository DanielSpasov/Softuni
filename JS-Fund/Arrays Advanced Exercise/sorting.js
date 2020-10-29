function sorting(input) {

    let result = []
    arr = input.sort((a, b) => a - b)

    while (arr.length !== 0) {
        result.push(arr[arr.length - 1]) && arr.pop()
        result.push(arr[0]) && arr.shift()
    }
    console.log(result.join(' '))
}