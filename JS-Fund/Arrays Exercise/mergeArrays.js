function solve(arrOne, arrTwo) {

    let output = ''

    for (let num in arrOne) {
        if(num % 2 == 0){
            if(arrOne.length - 1 == num){
                let temp = +arrOne[num] + +arrTwo[num]
                output += `${temp}`
            } else {
                let temp = +arrOne[num] + +arrTwo[num]
                output += `${temp} - `
            }
        } else {
            if(arrOne.length - 1 == num){
                let temp = arrOne[num] + arrTwo[num]
                output += `${temp}`
            } else {
                let temp = arrOne[num] + arrTwo[num]
                output += `${temp} - `
            }   
        }
    }

    console.log(output)
}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])