function solve(input) {

    let output = []
    input.shift()
    
    for(let line of input){
        let [town, latitude, longitude] = line.split('|').filter(x => x != '').map(x => x.trim())
        let city = {Town: town, Latitude: Number(Number(latitude).toFixed(2)), Longitude: Number(Number(longitude).toFixed(2))}
        output.push(city)
    }
    console.log(JSON.stringify(output))
}


solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])