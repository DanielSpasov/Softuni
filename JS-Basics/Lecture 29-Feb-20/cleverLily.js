function solve(input){

    let n = +input.shift()
    let washPrice = +input.shift()
    let toyPrice = +input.shift()

    let toysCount = 0
    let moneySaved = 0
    let tax = 10

    for(i = 0; i < n; i++){
        if(i % 2 != 0){
            moneySaved = moneySaved + tax
            tax += 10
            // console.log(moneySaved)
            moneySaved -= 1 // Brother tax

        } else {
            toysCount++
        }
    }
    moneySaved = moneySaved + (toysCount * toyPrice)
    let diff = Math.abs(moneySaved - washPrice)

    if(moneySaved >= washPrice){
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}

solve([21,1570.98,3])