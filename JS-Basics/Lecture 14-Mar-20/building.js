function solve(input) {

    let floors = +input.shift()
    let rooms = +input.shift()
    let roomsCounter = 0
    let result = ""

    for (let i = floors; i > 0; i--) {
        for (let j = 0; j < rooms; j++) {

            if (i === floors) {
                roomsCounter++
                result += `L${i}${j} `

                if (roomsCounter == rooms) {
                    console.log(result)
                    result = ""
                    roomsCounter = 0
                }
            } else if (i % 2 == 0) {
                roomsCounter++
                result += `O${i}${j} `

                if (roomsCounter == rooms) {
                    console.log(result)
                    result = ""
                    roomsCounter = 0
                }
            } else {
                roomsCounter++
                result += `A${i}${j} `

                if (roomsCounter == rooms) {
                    console.log(result)
                    result = ""
                    roomsCounter = 0
                }
            }
        }
    }
}


solve([9, 5])