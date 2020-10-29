function solve(input) {

    let speed = Number(input[0])
    let zone = input[1]
    let limit = 0

    switch (zone) {
        case 'city': limit = 50; break
        case 'residential': limit = 20; break
        case 'interstate': limit = 90; break
        case 'motorway': limit = 130; break
    }

    let speeding = speed - limit
    
    if (speeding <= 20 && speeding > 0) {
        console.log('speeding')
    } else if (speeding <= 40 && speeding > 20) {
        console.log('excessive speeding')
    } else if (speeding > 40) {
        console.log('reckless driving')
    }
}

solve([40, 'city'])
solve([21, 'residential'])
solve([120, 'interstate'])
solve([200, 'motorway'])