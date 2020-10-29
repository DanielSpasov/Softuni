function solve(num1, num2) {

    let GCD

    for (let i = 9; i > 0; i--) {

        if(num1 % i === 0 && num2 % i === 0){
            GCD = i
            break
        }
    }

    console.log(GCD)
}

solve(15, 5)
solve(2154, 458)