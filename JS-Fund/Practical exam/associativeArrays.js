function solve(input) {

    let garden = new Map()

    // Store the plant in the array
    let n = input.shift()
    for (let i = 0; i < n; i++) {

        let [plant, rarity] = input.shift().split('<->')
        if (garden.has(plant)) {
            garden.set(plant, {rarity: rarity, rating: []})
        } else {
            garden.set(plant, { rarity: rarity, rating: [] })
        }
    }

    // Main loop
    let line = input.shift()
    while (line !== 'Exhibition') {

        let [command, args] = line.split(': ')
        let [plant, arg] = args.split(' - ')

        switch (command) {
            case 'Rate':
                if (!garden.has(plant)) {
                    console.log('error')
                } else {
                    rate(plant, Number(arg))
                }
                break
            case 'Update':
                if (!garden.has(plant)) {
                    console.log('error')
                } else {
                    update(plant, Number(arg))
                }
                break
            case 'Reset':
                if (!garden.has(plant)) {
                    console.log('error')
                } else {
                    reset(plant)
                }
                break
            default:
                console.log('error')
                break
        }

        line = input.shift()
    }

    // Output
    let arrGarden = Array.from(garden).sort((a, b) => getAvg(b[0]) - getAvg(a[0])).sort((a, b) => b[1].rarity - a[1].rarity)
    console.log('Plants for the exhibition:')
    for (plant of arrGarden) {
        console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${getAvg(plant[0])}`)
    }

    // Functions
    function rate(plant, rating) {

        let currentPlant = garden.get(plant)
        currentPlant.rating.push(rating)
    }

    function update(plant, newRarity) {

        let currentPlant = garden.get(plant)
        currentPlant.rarity = newRarity
    }

    function reset(plant) {

        let currentPlant = garden.get(plant)
        currentPlant.rating = []
    }

    function getAvg(plant) {

        let currentPlant = garden.get(plant)
        let numOfRatings = 0
        let sumOfRatings = 0

        for (let i = 0; i < currentPlant.rating.length; i++) {
            numOfRatings++
            sumOfRatings += currentPlant.rating[i]
        }

        let avg = sumOfRatings / numOfRatings
        if (isNaN(avg)) {
            return '0.00'
        } else {
            return avg.toFixed(2)
        }
    }
}

solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 4',
    'Reset: Arnoldii',
    'Exhibition'
])

solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
])