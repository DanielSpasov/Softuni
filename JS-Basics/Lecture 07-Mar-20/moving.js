function solve(input) {

    let w = +input.shift()
    let l = +input.shift()
    let h = +input.shift()

    let volumeHouse = w * l * h
    let command = input.shift()

    while (command !== "Done") {

        let box = +(command)
        volumeHouse -= box

        if (volumeHouse < 0) {
            console.log(`No more free space! You need ${Math.abs(volumeHouse)} Cubic meters more.`)
            break
        }

        command = input.shift()
    }
    if (volumeHouse >= 0) {
        console.log(`${volumeHouse} Cubic meters left.`)
    }
}

solve([10, 1,2,4,6,"Done"])