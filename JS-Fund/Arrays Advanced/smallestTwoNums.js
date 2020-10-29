function smallestTwoNums(input) {

    let sortedInAscending = input.sort((a, b) => {
        return a - b
    })

    console.log(sortedInAscending.slice(0, 2).join(' '))
}

smallestTwoNums([30, 15, 50, 5])
smallestTwoNums([3, 0, 10, 4, 7, 3])