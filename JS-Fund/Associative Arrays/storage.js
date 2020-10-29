function solve(input) {

    let map = new Map()
    
    for(let line of input){
        let [product, count] = line.split(' ')
        if(!map.has(product)){
            map.set(product, +count)
        } else {
            let currentCount = map.get(product)
            let newCount = currentCount + +count
            map.set(product, newCount)
        }
    }

    for(let key of map){
        console.log(`${key[0]} -> ${key}`)
    }
}

solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])