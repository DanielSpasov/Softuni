function solve(input){

    let fruit = input.shift()
    let set = input.shift()
    let numOfSets = +input.shift()

    let result = 0

    switch(fruit){
        case "Watermelon":
            if(set === "small"){
                result = numOfSets * 56 * 2
            } else if(set === "big"){
                result = numOfSets * 28.70 * 5
            }
        break
        case "Mango":
            if(set === "small"){
                result = numOfSets * 36.66 * 2
            } else if(set === "big"){
                result = numOfSets * 19.60 * 5
            }
        break
        case "Pineapple":
            if(set === "small"){
                result = numOfSets * 42.10 * 2
            } else if(set === "big"){
                result = numOfSets * 24.80 * 5
            }
        break
        case "Raspberry":
            if(set === "small"){
                result = numOfSets * 20 * 2
            } else if(set === "big"){
                result = numOfSets * 15.20 * 5
            }
        break
    }
    let answer = 0

    if(result > 400 && result <= 1000){
        answer = result * 0.85
        console.log(`${answer.toFixed(2)} lv.`)
    } else if(result > 1000){
        answer = result * 0.50
        console.log(`${answer.toFixed(2)} lv.`)
    } else {
        console.log(`${result.toFixed(2)} lv.`)
    }
}

solve(["Watermelon","big",4])
solve(["Pineapple","small",1])
solve(["Raspberry","small",50])
solve(["Mango","big",8])