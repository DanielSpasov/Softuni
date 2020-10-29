function storeProvision(currentStock, newStock) {

    let products = []
    class Product {
        constructor(name, quantity) {
            this.name = name
            this.quantity = quantity
        }
    }

    for (let i = 0; i < currentStock.length; i += 2) {
        let name, quantity
        [name, quantity] = [currentStock[i], +currentStock[i + 1]]
        products.push(new Product(name, quantity))
    }

    for (let i = 0; i < newStock.length; i += 2) {
        let name, quantity
        [name, quantity] = [newStock[i], +newStock[i + 1]]

        for (let key = 0; key < products.length; key++) {

            // console.log(name, products[key].name)

            if (name === products[key].name) {
                products[key].quantity += quantity
                break
            } else {
                if (key === products.length - 1) {
                    products.push(new Product(name, quantity))
                    break
                }
                continue
            }
        }
    }

    for (let key in products) {
        console.log(`${products[key].name} -> ${products[key].quantity}`)
    }
}

storeProvision([
    'Chips', '5',
    'CocaCola', '9',
    'Bananas', '14',
    'Pasta', '4',
    'Beer', '2'
], [
    'Flour', '44',
    'Oil', '12',
    'Pasta', '7',
    'Tomatoes', '70',
    'Bananas', '30'
])