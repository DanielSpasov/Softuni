function solve(input) {

    input = input.split(' ')
    let inventory = new Map()

    while (input.length > 0) {
        let quantity = input.shift()
        let item = input.shift().toLowerCase()

        if (!inventory.has(item)) {
            inventory.set(item, quantity)
        } else {
            let currentQuan = +inventory.get(item)
            currentQuan += +quantity
            inventory.set(item, currentQuan)
        }

        let checkQuan = inventory.get(item)
        if (checkQuan >= 250 && item === 'shards') {
            console.log('Shadowmourne obtained!')
            let reduceQuan = inventory.get(item)
            reduceQuan -= 250
            inventory.set(item, reduceQuan)
            break
        } else if (checkQuan >= 250 && item === 'fragments') {
            console.log('Valanyr obtained!')
            let reduceQuan = inventory.get(item)
            reduceQuan -= 250
            inventory.set(item, reduceQuan)
            break
        } else if (checkQuan >= 250 && item === 'motes') {
            console.log('Dragonwrath obtained!')
            let reduceQuan = inventory.get(item)
            reduceQuan -= 250
            inventory.set(item, reduceQuan)
            break
        }
    }

    let keyItems = new Map()
    let otherItems = new Map()

    for (let kvp of inventory) {
        let item = kvp[0]
        let quantity = kvp[1]
        if (item === 'shards' || item === 'fragments' || item === 'motes') {
            keyItems.set(item, quantity)
        } else {
            otherItems.set(item, quantity)
        }
    }

    let arrKeyItems = Array.from(keyItems).sort((a, b) => b[1] - a[1])
    for(let kvp of arrKeyItems){
        console.log(`${kvp[0]}: ${kvp[1]}`)
    }

    let arrOtherItems = Array.from(otherItems).sort((a, b) => b[1] - a[1]).sort()
    for(let kvp of arrOtherItems){
        console.log(`${kvp[0]}: ${kvp[1]}`)
    }
}

// solve('3 motes 5 stones 4 Shards 6 leathers 255 fragments 7 Shards')
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')