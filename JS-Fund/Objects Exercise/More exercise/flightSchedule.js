function flightSchedule(input) {

    let flights = input[0]
    let commands = input[1]
    let status = input[2][0]

    let flightCodes = []
    let cancelledCodes = []
    for (let i = 0; i < flights.length; i++) {
        let flightArgs = flights[i].split(' ')
        flightCodes.push(flightArgs[0])
    }

    for (let i = 0; i < commands.length; i++) {
        let cancelledArgs = commands[i].split(' ')
        if (cancelledArgs[1] === 'Cancelled') {
            let code = cancelledArgs[0]

            for (let key in flightCodes) {
                if (code === flightCodes[key]) {
                    cancelledCodes.push(flightCodes[key])
                    flightCodes.splice(key, 1)
                }
            }
        }
    }

    if (status === 'Ready to fly') {
        for (let key in flights) {
            let readyArgs = flights[key].split(' ')
            for(let i in flightCodes){
                if(readyArgs[0] === flightCodes[i]){
                    console.log(`{ Destination: '${readyArgs[1]}', Status: '${status}' }`)
                }
            }
        }
    }
    if (status === 'Cancelled') {
        for (let key in flights) {
            let readyArgs = flights[key].split(' ')
            let flightsName = readyArgs[1]
            for(let i in cancelledCodes){
                if(readyArgs[0] === cancelledCodes[i]){
                    console.log(`{ Destination: '${flightsName}', Status: '${status}' }`)
                }
            }
        }
    }
}

flightSchedule([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    ['Cancelled']
]
)