function solve(input) {

    let output = []
    let currentBiggestNum = Number.MIN_SAFE_INTEGER

    for(num of input){
        num = Number(num)
        if(num >= currentBiggestNum){
            currentBiggestNum = num
            output.push(currentBiggestNum)
        }
    }

    for(num of output){
        console.log(num)
    }
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])