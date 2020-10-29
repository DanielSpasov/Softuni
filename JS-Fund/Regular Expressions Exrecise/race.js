function solve(input) { // The most clean solve i've ever made

    let racersList = input.shift().split(', ')
    let namePattern = /[A-Za-z]+/g
    let distancePattern = /[0-9]/g
    let racersMap = new Map()

    for (line of input) {
        if (line === 'end of race') {
            break
        }

        // Finding the name
        let nameArr = line.match(namePattern)
        let name = ''
        for (char of nameArr) {
            name += char
        }

        // Checking if the person is in the list
        if (!racersList.includes(name)) {
            continue
        }

        // Finding the distance
        let distanceArr = line.match(distancePattern)
        let distance = 0
        for (num of distanceArr) {
            distance += Number(num)
        }

        // Puting the person in the map
        if (!racersMap.has(name)) {
            racersMap.set(name, distance)
        } else {
            let currentDistance = racersMap.get(name)
            distance += currentDistance
            racersMap.set(name, distance)
        }
    }

    // Output
    let racersArr = Array.from(racersMap).sort((a, b) => b[1] - a[1])

    console.log(`1st place: ${racersArr[0][0]}`)
    console.log(`2nd place: ${racersArr[1][0]}`)
    console.log(`3rd place: ${racersArr[2][0]}`)
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])