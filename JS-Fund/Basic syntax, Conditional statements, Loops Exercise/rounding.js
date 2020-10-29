function solve(n, r){

    if(r > 15){
        r = 15
    }

    let result = Number(n).toFixed(Number(r))
    let output = parseFloat(result)
    console.log(output)
}

solve('3.1414161614614261251216','2')
solve('10.5','3')