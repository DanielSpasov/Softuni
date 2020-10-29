function solve(input){

    let numbers = input.shift()
    let pattern1 = /[\+359]{4}[ ][2][ ][2]{3}[ ][2]{4}/g
    let pattern2 = /[\+359]{4}[-][2][-][2]{3}[-][2]{4}/g
    let result1 = numbers.match(pattern1)
    let result2 = numbers.match(pattern2)
    let result = []

    for(number of result1){
        if(result.includes(number)){
            continue
        } else {
            result.push(number)
        }
    }
    for(number of result2){
        if(result.includes(number)){
            continue
        } else {
            result.push(number)
        }
    }

    console.log(result.join(', '))
}

solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ])