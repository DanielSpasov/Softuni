function lastKNumSeq(n, k) {
    let output = [1]
    for (let i = 1; i < n; i++) {
        output[i] = sumLastK(output, k)
    }

    console.log(output.join(' '))

    function sumLastK(arr, k) {
        k = arr.length > k ? k : arr.length
        let sum = 0
        for (let i = 1; i <= k; i++) {
            sum += arr[arr.length - i]
        }
        return sum
    }
}

lastKNumSeq(6, 3)
lastKNumSeq(8, 2)