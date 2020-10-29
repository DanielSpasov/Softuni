function solve(input) {

    let initialNum = 1
    let output = []

    for (let i = 0; i < input.length; i++) {

        let command = input[i]
        switch (command) {
            case 'add':
                output.push(initialNum)
                break
            case 'remove':
                output.pop()
                break
        }

        initialNum++
    }

    if(output.length == 0){
        console.log('Empty')
    } else {
        console.log(output.join(' '))
    }
}

solve(['add', 'add', 'add', 'add'])
solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])