function arrayModifier(input) {

    let numbers = input.shift().split(' ').map(Number)

    for (let i in input) {
        let args = input[i].split(' ')
        let command = args[0]

        if (command === 'swap') {
            swap(+args[1], +args[2])
        }
        if (command === 'multiply') {
            multiply(+args[1], +args[2])
        }
        if (command === 'decrease') {
            decrease()
        }
        if (command === 'end') {
            end()
        }
    }

    function decrease(){
        for(let i in numbers){
            let result = numbers[i] -= 1
            numbers.splice(i, 1, result)
        }
    }

    function multiply(index1, index2){
        let num1 = numbers[index1]
        let num2 = numbers[index2]
        sum = num1 * num2
        numbers.splice(index1, 1, sum)
    }

    function swap(index1, index2) {
        let num1 = numbers[index1]
        let num2 = numbers[index2]
        numbers.splice(index1, 1, num2)
        numbers.splice(index2, 1, num1)
    }

    function end() {
        console.log(numbers.join(', '))
    }
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])