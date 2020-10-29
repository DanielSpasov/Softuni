function train(input) {

    let train = input.shift().split(' ').map(Number)
    let maxCapacity = +input.shift()

    for (i in input) {
        let command = input[i].split(' ')

        switch (command[0]) {
            case 'Add':
                input.push(train.push(command[1]))
                break
            default:
                command = +command
                for (let j = 0; j < train.length; j++) {
                    if(train[j] + command > maxCapacity){
                        continue
                    } else {
                        train[j] += command
                        break
                    }
                }
                break
        }
    }
    console.log(train.join(' '))
}