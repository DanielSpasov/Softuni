function solve(input) {

    let money = +input.shift()
    let count = 0
    let coins = Math.floor(money * 100)

    while (coins > 0) {
        if (coins - 200 >= 0) {
            coins -= 200
            count++
        } else if (coins - 100 >= 0) {
            coins -= 100
            count++
        } else if (coins - 50 >= 0) {
            coins -= 50
            count++
        } else if (coins - 20 >= 0) {
            coins -= 20
            count++
        } else if (coins - 10 >= 0) {
            coins -= 10
            count++
        } else if (coins - 5 >= 0) {
            coins -= 5
            count++
        } else if (coins - 2 >= 0) {
            coins -= 2
            count++
        } else if (coins - 1 >= 0) {
            coins -= 1
            count++
        }
    }
    console.log(count)
}

solve([0.56])