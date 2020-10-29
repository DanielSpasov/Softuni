function solve(n, k) {

    let seq = [1]

    for (let i = 1; i < n; i++) {

        sumLast(seq, k)
    }

    console.log(seq.join(' '))

    function sumLast(arr, k) {
        
        let sum = 0
        if(arr.length <= k){
            for(num of arr){
                sum += num
            }
        } else {
            for(let i = 1; i <= k; i++){
                sum += arr[arr.length - i]
            }
        }
        arr.push(sum)
    }
}

solve(6, 3)
solve(8, 2)