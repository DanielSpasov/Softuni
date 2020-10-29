function solve(input){

    let register = new Map()

    for(line of input){

        let [cityName, population] = line.split(' <-> ')

        if(register.has(cityName)){
            let currentPop = register.get(cityName)
            currentPop += Number(population)
            register.set(cityName, Number(currentPop))
        } else {
            register.set(cityName, Number(population))
        }
    }

    let output = Array.from(register)
    for(city of output){
        console.log(`${city[0]} : ${city[1]}`)
    }
}

// solve(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000'])

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])