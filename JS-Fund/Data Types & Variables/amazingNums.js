function solve(number){

    let sum = 0
    let num = number.toString()
    let length = num.length

    for(let i = 0; i < length; i++){
        let currentChar = Number(num.charAt(i))
        sum += currentChar
    }
    
    if(sum.toString().includes('9')){
        console.log(`${number} Amazing? True`)
    } else if(!sum.toString().includes('9')){
        console.log(`${number} Amazing? False`)
    }
}

solve(1233)
solve(999)
solve(583472)