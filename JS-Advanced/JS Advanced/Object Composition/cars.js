function solve(input) {

    const reg = new Map()

    let commands = {

        create: ([name, , parent]) => {
            parent = parent ? reg.get(parent) : null
            let newObj = Object.create(parent)
            reg.set(name, newObj)
            return newObj
        },

        set: ([name, key, value]) => {
            let obj = reg.get(name)
            obj[key] = value
        },

        print: ([name]) => {
            let obj = reg.get(name)
            let allProperties = []
            Object.keys(obj).forEach(key => allProperties.push(`${key}:${obj[key]}`))
            while (Object.getPrototypeOf(obj)) {
                Object.keys(Object.getPrototypeOf(obj)).forEach(key => allProperties.push(`${key}:${Object.getPrototypeOf(obj)[key]}`))
                obj = Object.getPrototypeOf(obj)
            }
            console.log(allProperties.join(', '))
        }
    }

    for (let row of input) {
        let [command, ...args] = row.split(' ')
        commands[command](args)
    }
}

// color:red
// model:new, color:red
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])