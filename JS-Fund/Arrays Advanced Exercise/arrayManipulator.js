function arrayManipulator(integers, commands) {

    let command = commands.shift()

    while (command !== 'print') {
        let args = command.split(' ')
        command = args[0]

        switch(command){
            case 'add':
                add()
                break
            case 'addMany':
                addMany()
                break
            case 'contains':
                contains()
                break
            case 'remove':
                remove()
                break
            case 'shift':
                shift()
                break
            case 'sumPairs':
                sumPairs()
                break
            case 'print':
                print()
        }

        function add() {
            let index = parseInt(args[1])
            let element = parseInt(args[2])
            integers.splice(index, 0, element)
        }
        function addMany() {
            let index = parseInt(args[1])
            for (let j = args.length - 1; j >= 2; j--) {
                let element = parseInt(args[j])
                integers.splice(index, 0, element)
            }
        }
        function contains() {
            let element = parseInt(args[1])
            console.log(integers.indexOf(element))
        }
        function remove() {
            let index = parseInt(args[1])
            integers.splice(index, 1)
        }
        function shift() {
            let position = parseInt(args[1])
            for (let a = 0; a < position; a++) {
                let first = integers.shift()
                integers.push(first)
            }
        }
        function sumPairs() {
            integers = integers.map((e, i, integers) => i < integers.length - 1 ? (integers[i] += integers[i + 1]) : integers[i] = integers[i]).filter((e, i) => i % 2 === 0)
        }
        
        command = commands.shift()
    }
    console.log(`[ ${integers.join(', ')} ]`)
}