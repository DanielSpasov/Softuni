function solve(num){

    let allNumsAreSame = true
    let sum = 0

    num = num.toString()
    let firstChar = num[0]
    for(let i = 0; i < num.length; i++){
        if(num[i] !== firstChar){
            allNumsAreSame = false
            break
        }
    }

    for(char of num){
       sum += Number(char)
    }

    console.log(allNumsAreSame)
    console.log(sum)
}

solve(2222222)
solve(1234)