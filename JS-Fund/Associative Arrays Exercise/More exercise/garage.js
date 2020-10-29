function solve(input){

    const garage = {}

    for(line of input){
        line = line.split(', ')
        let garageNo = line[0].split(' - ')[0]
        garage[garageNo] = [line[0].split(' - ')[1]]
    }

    let arrGarage = Object.entries(garage)

    for(kvp of arrGarage){
        console.log(`Garage № ${kvp[0]}`)

        for(innerKvp of kvp[1]){
            console.log(`--- ${innerKvp}`)
        }
    }
}

solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
  ])