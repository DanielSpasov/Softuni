function solve(input){

    let recordInSecs = +input.shift()
    let distanceInMeters = +input.shift()
    let secondsForMeter = +input.shift()

    let slowCal = Math.floor(distanceInMeters / 50)
    let slow = slowCal * 30
    let result = (secondsForMeter * distanceInMeters) + slow
    let diff = Math.abs(recordInSecs - result)

    if(result >= recordInSecs){
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes! The new record is ${result.toFixed(2)} seconds.`)
    }
}

solve([10164,1400,25])
solve([5554.36,1340,3.23])