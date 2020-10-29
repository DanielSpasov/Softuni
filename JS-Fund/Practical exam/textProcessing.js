function solve(input) {

    let stops = input.shift()

    let line = input.shift()
    while (line !== 'Travel') {

        let [command, firstArg, secondArg] = line.split(':')

        if (command === 'Add Stop') {
            if (Number(firstArg) >= 0 && Number(firstArg) < stops.length) {
                addStop(Number(firstArg), secondArg)
            }
        }
        if (command === 'Remove Stop') {
            if (Number(firstArg) >= 0 && Number(firstArg) < stops.length && Number(secondArg) >= 0 && Number(secondArg) < stops.length) {
                removeStop(Number(firstArg), Number(secondArg))
            }
        }
        if (command === 'Switch') {
            change(firstArg, secondArg)
        }

        console.log(stops)
        line = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)

    // Functions
    function addStop(index, str) {

        let firstPart = stops.substring(0, index)
        let secondPart = stops.substring(index, stops.length)
        stops = firstPart + str + secondPart
    }

    function removeStop(sIndex, eIndex) {

        let subs = stops.substring(sIndex, eIndex + 1)
        stops = stops.replace(subs, '')
    }

    function change(oldStr, newStr) {

        stops = stops.replace(oldStr, newStr)
    }
}




solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])