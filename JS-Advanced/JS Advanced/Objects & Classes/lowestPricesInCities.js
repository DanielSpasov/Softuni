function solve(input) {

    let products = new Map()

    for (let line of input) {

        let [town, product, price] = line.split(" | ")

        if (!products.has(product)) {
            products.set(product, new Map())
        }

        products.get(product).set(town, Number(price))
    }


    for (let [key, value] of products) {

        let lowest = ([...value].reduce(function (a, b) {

            if (a[1] < b[1]) {
                return a
            } else if (a[1] > b[1]) {
                return b
            }
            return a

        }))

        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`)
    }
}

// solve(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'])

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])