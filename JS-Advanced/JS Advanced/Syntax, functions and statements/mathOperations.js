function solve(num1, num2, operator) {

    let result

    switch(operator){
        case '+': result = Number(num1) + Number(num2); break
        case '-': result = Number(num1) - Number(num2); break
        case '/': result = Number(num1) / Number(num2); break
        case '*': result = Number(num1) * Number(num2); break
        case '%': result = Number(num1) % Number(num2); break
        case '**': result = Number(num1) ** Number(num2); break
    }

    console.log(result)
}

solve(5, '6', '+')