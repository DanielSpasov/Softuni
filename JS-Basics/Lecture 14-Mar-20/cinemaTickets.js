function solve(input) {

    let movie = input.shift()
    let standartCount = 0
    let studentCount = 0
    let kidCount = 0
    let totalTickets = 0

    while (movie !== "Finish") {
        let seats = +input.shift()
        let people = 0
        let ticket = input.shift()

        while (ticket !== "End") {
            people++
            totalTickets++
            switch (ticket) {
                case "standard":
                    standartCount++
                    break
                case "student":
                    studentCount++
                    break
                case "kid":
                    kidCount++
                    break
            }

            if (seats === people) {
                break
            }
            ticket = input.shift()
        }

        let currentPercents = people / seats * 100
        console.log(`${movie} - ${currentPercents.toFixed(2)}% full.`)

        movie = input.shift()
    }
    let studentPercents = studentCount / totalTickets * 100
    let kidPercents = kidCount / totalTickets * 100
    let standardPercents = standartCount / totalTickets * 100

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${studentPercents.toFixed(2)}% student tickets.`)
    console.log(`${standardPercents.toFixed(2)}% standard tickets.`)
    console.log(`${kidPercents.toFixed(2)}% kids tickets.`)
}

solve(["Taxi",
    10,
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    6,
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])