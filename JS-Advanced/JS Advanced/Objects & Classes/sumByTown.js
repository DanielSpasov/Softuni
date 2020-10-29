function solve(input) {

    let cities = {}

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i]
        let income = Number(input[i + 1])

        if(cities[town] === undefined){
            cities[town] = income
        } else {
            cities[town] += income
        }
    }
    console.log(JSON.stringify(cities))
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])
solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4'])