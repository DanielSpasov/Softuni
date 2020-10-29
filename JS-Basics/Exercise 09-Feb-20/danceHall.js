function solve(input) {

    let l = Number(input.shift())
    let w = Number(input.shift())
    let a = Number(input.shift())

    // 1 Dancer = 40cm2
    // console.log(`Lenght: ${l}, Width: ${w}, A:${a}`)

    let roomArea = (l * 100) * (w * 100)
    let garderob = (a * 100) * (a * 100)
    let skameika = roomArea / 10
    let usableRoomArea = roomArea - garderob - skameika

    // console.log(usableRoomArea)
    // console.log(`Skameika ${skameika}`)

    let dancerSpaceNeeded = 7000
    let dancer = 40
    let dancers = usableRoomArea / (dancer + dancerSpaceNeeded)
    // console.log(dancerSpaceNeeded)
    console.log(Math.floor(dancers))
}

solve([
    50,
    25,
    2
])