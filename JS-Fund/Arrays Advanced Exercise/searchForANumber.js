function searchForNumber(input, arr) {

    let els = arr[0]
    let numOfElsToDel = arr[1]
    let target = arr[2]
    let times = 0

    input = input.slice(0, els)
    input = input.splice(numOfElsToDel, input.length)

    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i]
        if(currentNum == target){
            times++
        }
    }
    console.log(`Number ${target} occurs ${times} times.`)
}