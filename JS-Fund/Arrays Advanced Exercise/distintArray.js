function distinctArray(input) {

    let contains = []
    let output = []

    for (i in input) {
        if(contains.includes(input[i])){
            continue
        } else {
            output.push(input[i])
        }
        contains.push(input[i])
    }
    console.log(output.join(' '))
}