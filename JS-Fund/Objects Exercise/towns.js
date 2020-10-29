function town(input) {

    let cities = []
    class City {
        constructor(name, lat, long) {
            this.name = name
            this.lat = lat
            this.long = long
        }
    }

    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(' | ')
        let name, lat, long
        [name, lat, long] = [info[0], +info[1], +info[2]]
        cities.push(new City(name, lat, long))
    }

    for (let key in cities) {
        console.log(`{ town: '${cities[key].name}', latitude: '${cities[key].lat.toFixed(2)}', longitude: '${cities[key].long.toFixed(2)}' }`)
    }
}

town(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])