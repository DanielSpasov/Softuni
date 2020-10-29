function solve(input) {

    const register = new Map()

    for (let line of input) {

        let [brand, model, quantity] = line.split(" | ").filter(w => w !== "")
 
        if (register.has(brand)) { // If the brand is registered

            if (register.get(brand).has(model)) { // If the model is registered
                register.get(brand).set(model,  register.get(brand).get(model) + Number(quantity))

            } else { // If the model is not registered
                register.get(brand).set(model, Number(quantity))
            }

        } else { // If the brand is not registered
            let modelsAndTotalSold = new Map()
            modelsAndTotalSold.set(model, Number(quantity))
            register.set(brand, modelsAndTotalSold)
        }
    }

    // Output
    for (brand of register) {
        console.log(brand[0])
        for (model of brand[1]) {
            console.log(`###${model[0]} -> ${model[1]}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])