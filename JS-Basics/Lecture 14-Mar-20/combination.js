function solve(input){

    let n = +input.shift()
    let combinations = 0

    for(let num1 = 0; num1 <= n; num1++){
        for(let num2 = 0; num2 <= n; num2++){
            for(let num3 = 0; num3 <= n; num3++){
                if(num1 + num2 + num3 === n){
                    combinations++
                }
            }
        }
    }
    console.log(combinations)
}

solve([25])