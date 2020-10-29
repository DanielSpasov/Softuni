function solve(...input) {

    let types = new Map()

    input.forEach(el => {
        console.log(`${typeof(el)}: ${el}`)
        if(!types.has(typeof(el))){
            types.set(typeof(el), 1)
        } else {
            let current = types.get(typeof(el))
            current++
            types.set(typeof(el), current)
        }
    })

    Array.from(types)
    .sort((a, b) => b[1] - a[1])
    .forEach(el => {
        console.log(`${el[0]} = ${el[1]}`)
    })
}

solve('cat', 42, function () { console.log('Hello world!') }, 66)