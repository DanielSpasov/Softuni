function solve(input) {

    let storage = new Map()
    let bottles = new Map()

    for(line of input){
        
        let [fruit, quan] = line.split(' => ')
        
        if(!storage.has(fruit)){ // If no fruit with this is name is registered
            storage.set(fruit, Number(quan))
            
        } else { // If fruit with this name is registered
            let storageQuan = Number(storage.get(fruit))
            storageQuan += Number(quan)
            storage.set(fruit, storageQuan)
        }

        let storageQuan = Number(storage.get(fruit))
        if(storageQuan >= 1000){
            
            let bottlesToAdd = Number(Math.floor(storageQuan / 1000))
            storageQuan = storageQuan % 1000
            storage.set(fruit, Number(storageQuan))

            if(!bottles.has(fruit)){ // If no bottles are made from this fruit
                bottles.set(fruit, bottlesToAdd)

            } else { // If bottles are made from this fruit
                let currentBottleQuan = Number(bottles.get(fruit))
                currentBottleQuan += Number(bottlesToAdd)
                bottles.set(fruit, currentBottleQuan)
            }
        }
    }

    for(fruit of bottles){
        console.log(`${fruit[0]} => ${fruit[1]}`)
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])