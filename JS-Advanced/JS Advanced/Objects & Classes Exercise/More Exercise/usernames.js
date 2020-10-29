function solve(input){

    // Removeing duplicates
    const usedNames = []
    for(name of input){
        if(usedNames.includes(name)){
            continue
        } else {
            usedNames.push(name)
        }
    }

    // Output
    usedNames.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length)
    for(name of usedNames){
        console.log(name)
    }
}

// solve(['Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston'])

solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'])