function solve(input) {

    let n = +input.shift()
    let balance = 0

    let currentAmount = 1
    let text = input.shift()

    while (currentAmount <= n){

        let amount = +(text)

        if(amount < 0){
            console.log(`Invalid operation!`)
            break
        }

        balance += amount

        console.log(`Increase: ${amount.toFixed(2)}`)

        currentAmount++
        text = input.shift()
    }
    console.log(`Total: ${balance.toFixed(2)}`)
}

solve([3,5.51,69.42,100])