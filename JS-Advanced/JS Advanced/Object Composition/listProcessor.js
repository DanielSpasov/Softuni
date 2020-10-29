function solve(input) {

    let result = []

    let commands = {
        print: () => { return result.join(',') },
        add: (str) => { return result.push(str) },
        remove: (str) => { return result = result.filter(x => x != str) }
    }

    input.forEach(args => {
        let [command, arg] = args.split(' ')
        switch (command) {
            case 'add':
                return commands.add(arg)
            case 'remove':
                return commands.remove(arg)
            case 'print':
                return console.log(commands.print())
        }
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']) // again, again
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']) // pesho, george