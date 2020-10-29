function solve(input){

    let recordInSecs = Number(input.shift())
    let distance = Number(input.shift())
    let timeForOne = Number(input.shift())

    let timeForDistance = distance * timeForOne
    let delay = Math.floor(distance / 15) * 12.5
    let totalTime = delay + timeForDistance

    if(recordInSecs > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime.toFixed(2))} seconds.`)
    } else {
        let slowerTime = totalTime - recordInSecs
        console.log(`No, he failed! He was ${(slowerTime.toFixed(2))} seconds slower.`)
    }
}

solve([
    10464,
1500,
20
])