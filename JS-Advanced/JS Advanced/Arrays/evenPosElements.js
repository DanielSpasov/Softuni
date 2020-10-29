function solve(input) {

    let output = []

    for(i in input){
        if(i % 2 == 0){
            output.push(input[i])
        }
    }

    console.log(output.join(' '))
}

solve(['20', '30', '40'])
solve(['5', '10'])