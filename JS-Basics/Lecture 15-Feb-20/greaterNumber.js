function solve(input){

    let num1 = Number(input.shift())
    let num2 = Number(input.shift())

    if(num1 < num2){
        console.log(num2)
    } else{
        console.log(num1)
    }
}

solve([17, 19])