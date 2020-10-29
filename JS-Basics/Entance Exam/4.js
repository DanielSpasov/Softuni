function solve(input) {

    let num = +input.shift()

    let musalaCounter = 0
    let monblanCounter = 0
    let kiliCounter = 0
    let k2Counter = 0
    let everestCounter = 0

    let totalCount = 0

    for (let i = 0; i < num; i++) {
        let currentNum = +input.shift()
        totalCount += currentNum

        if(currentNum <= 5){
            musalaCounter += currentNum
        }else if(currentNum >= 6 && currentNum <= 12){
            monblanCounter += currentNum
        }else if(currentNum >= 13 && currentNum <= 25){
            kiliCounter += currentNum
        }else if(currentNum >= 26 && currentNum <= 40){
            k2Counter += currentNum
        }else if(currentNum > 40){
            everestCounter += currentNum
        }
    }
    console.log(`${(musalaCounter / totalCount * 100).toFixed(2)}%`)
    console.log(`${(monblanCounter / totalCount * 100).toFixed(2)}%`)
    console.log(`${(kiliCounter / totalCount * 100).toFixed(2)}%`)
    console.log(`${(k2Counter / totalCount * 100).toFixed(2)}%`)
    console.log(`${(everestCounter / totalCount * 100).toFixed(2)}%`)
}

// solve([10,10,5,1,100,12,26,17,37,40,78])
solve([5,25,41,31,250,6])