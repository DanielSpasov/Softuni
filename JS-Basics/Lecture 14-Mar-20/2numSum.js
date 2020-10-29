function solve(input) {

    let start = +input.shift()
    let end = +input.shift()
    let num = +input.shift()
    let counter = 0
    let flag = false

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
        counter++

            if (i + j === num){
                console.log(`Combination N:${counter} (${i} + ${j} = ${num})`)
                flag = true
                break
            }
        }
        if(flag){
            break
        }
    }
    if(!flag){
        console.log(`${counter} combinations - neither equals ${num}`)
    }
}

solve([1,10,5])
solve([23,24,20])
solve([88,888,2000])