function solve(input){

    const register = []

    for(line of input){
        let [name, level, items] = line.split(' / ')
        items = items ? items.split(', ') : []

        let hero = {
            name: name,
            level: Number(level),
            items: items
        }

        register.push(hero)
    }

    console.log(JSON.stringify(register))
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])