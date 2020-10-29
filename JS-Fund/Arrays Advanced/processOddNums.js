function processOddNums(input) {

    let output = []

    for(i in input){
        if(i % 2 !== 0){
            let num = input[i] * 2
            output.unshift(num)
        }
    }

    console.log(output.join(' '))
}

processOddNums([10, 15, 20, 25])
processOddNums([3, 0, 10, 4, 7, 3])