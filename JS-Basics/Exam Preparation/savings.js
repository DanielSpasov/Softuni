function solve(input){

    let income = +input.shift()
    let months = +input.shift()
    let tax = +input.shift()

    let savings = income * 0.3
    let savingsPerM = income - (tax + savings)
    let result = savingsPerM * months

    let log = savingsPerM / income * 100

    console.log(`She can save ${log.toFixed(2)}%`)
    console.log(result.toFixed(2))
}

solve([1500,3,800])