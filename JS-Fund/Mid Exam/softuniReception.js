function reception(input) {

    let empOne = +input.shift()
    let empTwo = +input.shift()
    let empThree = +input.shift()
    let students = +input.shift()
    let hoursNeeded = 0

    while (students > 0) {
        hoursNeeded++
        if (hoursNeeded % 4 == 0 && hoursNeeded != 0) {
            continue
        }

        students -= empOne + empTwo + empThree
    }

    console.log(`Time needed: ${hoursNeeded}h.`)
}

reception(['5', '6', '4', '20'])
reception(['1', '2', '3', '45'])
reception(['3', '2', '5', '40'])