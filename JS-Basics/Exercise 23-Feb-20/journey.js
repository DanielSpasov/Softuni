function solve(input) {

    let budget = +input.shift()
    let season = input.shift()

    let destination = ""
    let place = ""

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            budget = budget * 0.30
            place = "Camp"
        } else if (season === "winter") {
            budget = budget * 0.70
            place = "Hotel"
        }

    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            budget = budget * 0.40
            place = "Camp"
        } else if (season === "winter") {
            budget = budget * 0.80
            place = "Hotel"
        }
    } else {
        destination = "Europe"
        budget = budget * 0.90
        place = "Hotel"
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${place} - ${budget.toFixed(2)}`)
}

solve([
    1500,
    "summer"
])