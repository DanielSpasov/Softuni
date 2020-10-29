function solve(input) {// Works here but in Judge doesn't

    let health = 100
    let coins = 0
    let isDead = false
    
    let arr = input.split('|')
    
    for (let i = 0; i < arr.length; i++) {
        let room = arr[i].split(' ')
        let inRoom = room[0]
        let value = +room[1]

        if(isDead){
            console.log(`Best room: ${i}`)
            break
        }

        switch(inRoom){
            case 'potion':
                health += value
                if(health > 100){
                    let diff = 100 - (health - value)
                    console.log(`You healed for ${diff} hp.`)
                    health = 100
                    console.log(`Current health: ${health} hp.`)
                    break
                }
                console.log(`You healed for ${value} hp.`)
                console.log(`Current health: ${health} hp.`)
            break
            case 'chest':
                coins += value
                console.log(`You found ${value} coins.`)
            break
            default:
                health -= value
                if(health <= 0){
                    console.log(`You died! Killed by ${inRoom}.`)
                    isDead = true
                    break
                }
                console.log(`You slayed ${inRoom}.`)
            break
        }
    }
    if(!isDead){
        console.log("You've made it!")
        console.log(`Coins ${coins}`)
        console.log(`Health: ${health}`)
    }
}

solve()