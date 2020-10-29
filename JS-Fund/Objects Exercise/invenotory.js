function inventory(input) {

    let heroes = []
    class Hero {
        constructor(name, level, items) {
            this.name = name
            this.level = level
            this.items = items
        }
    }

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split('/ ')
        let name, level, items
        [name, level, items] = [args[0], +args[1], args[2].split(', ')]
        heroes.push(new Hero(name, level, items))
    }

    heroes.sort((a, b) => (a.level) > (b.level) ? 1 : -1)

    for (let key in heroes) {
        heroes[key].items.sort()     
        console.log(`Hero: ${heroes[key].name}`)
        console.log(`level => ${heroes[key].level}`)
        console.log(`items => ${heroes[key].items.join(', ')}`)
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])