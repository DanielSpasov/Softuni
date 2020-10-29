function smallestNum(numOne, numTwo, numThree) {

    let smallestNum = Number.MAX_SAFE_INTEGER

    if (numOne <= numTwo && numOne <= numThree) {
        smallestNum = numOne
    }
    if (numTwo <= numOne && numTwo <= numThree) {
        smallestNum = numTwo
    }
    if (numThree <= numTwo && numThree <= numOne) {
        smallestNum = numThree
    }
    console.log(smallestNum)
}