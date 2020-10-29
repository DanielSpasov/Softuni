function solve(base, inc) {

    let totalStone = 0
    let totalMarble = 0
    let totalLapis = 0
    let totalGold = 0
    let rows = 0
    let tempBase = base

    while (tempBase > 2) {
        let marbel = tempBase * 4 - 4
        let stone = tempBase * tempBase - marbel
        totalStone += stone

        rows++
        if (rows % 5 === 0) {
            totalLapis += marbel
        } else {
            totalMarble += marbel
        }
        tempBase -= 2
    }
    rows++
    let gold = tempBase * tempBase

    stone = Math.ceil(totalStone * inc)
    marble = Math.ceil(totalMarble * inc)
    lapis = Math.ceil(totalLapis * inc)
    totalGold = Math.ceil(gold * inc)
    totalHeight = Math.floor(rows * inc)

    console.log(`Stone required: ${stone}`)
    console.log(`Marble required: ${marble}`)
    console.log(`Lapis Lazuli required: ${lapis}`)
    console.log(`Gold required: ${totalGold}`)
    console.log(`Final pyramid height: ${totalHeight}`)
}

solve(11, 1)