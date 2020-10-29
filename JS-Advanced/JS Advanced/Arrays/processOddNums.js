function solve(input) {

    let arr = []
    for(i in input){
        if(i % 2 != 0){
            arr.push(input[i])
        }
    }

    let output = []
    for(num of arr){
        num *= 2
        output.push(num)
    }

    console.log(output.reverse().join(' '))
}

solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])