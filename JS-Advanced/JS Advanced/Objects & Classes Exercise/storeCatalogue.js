function solve(input) {

    const catalogue = new Map()

    for (line of input) {
        let [product, price] = line.split(' : ')
        catalogue.set({ name: product, price: price })
    }

    let arr = Array.from(catalogue).sort((a, b) => (a[0].name.localeCompare(b[0].name)))
    let usedLetters = []
    for (item of arr) {
        if (usedLetters.includes(item[0].name[0])){
            console.log(` ${item[0].name}: ${item[0].price}`)
        } else {
            usedLetters.push(item[0].name[0])
            console.log(item[0].name[0])
            console.log(` ${item[0].name}: ${item[0].price}`)
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])

// solve(["Banana : 2",
//     "Rubic's Cube : 5",
//     "Raspberry P : 4999",
//     "Rolex : 100000",
//     "Rollon : 10",
//     "Rali Car : 2000000",
//     "Pesho : 0.000001",
//     "Barrel : 10"])