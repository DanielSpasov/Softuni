function solve(input){
    let archName = input.shift()
    // console.log(`Architect name: ${archName}`)
    let projects = Number(input.shift())
    // console.log(`Projects: ${projects}`)
    let hoursNeeded = projects * 3
    console.log(`The architect ${archName} will need ${hoursNeeded} hours to complete ${projects} project/s.`)
}

solve([
    'Daniel',
    '5'
])