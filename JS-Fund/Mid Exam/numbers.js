function numbers(numbers) {

    numbers = numbers.split(' ').map(Number)

    // Find the avg
    let sum = 0
    let count = 0
    for (let i in numbers) {
        sum += numbers[i]
        count++
    }
    let avg = sum / count

    // Get the only numbers that are biger than the average
    let output = []
    for (let i in numbers) {
        if (numbers[i] > avg) {
            output.push(numbers[i])
        }
    }
    output.sort((a, b) => b - a)

    // Clean the array
    for(let i = output.length; i > 5; i--){
        output.pop()
    }

    // Output
    if(output[0] === undefined){
        console.log('No')
    } else {
        console.log(output.join(' '))
    }
}

numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')