function solve(steps, footprintLength, speed) {

    steps = Number(steps)
    footprintLength = Number(footprintLength)
    speed = Number(speed)

    let distanceInMeters = steps * footprintLength
    let speedMetersSec = speed / 3.6
    let time = distanceInMeters / speedMetersSec
    let rest = Math.floor(distanceInMeters / 500)

    let timeInMins = Math.floor(time / 60)
    let timeInSecs = Math.round(time - (timeInMins * 60))
    let timeInHours = Math.floor(time / 3600)

    console.log((timeInHours < 10 ? "0" : "") + timeInHours + ":" + 
    (timeInMins + rest < 10 ? "0" : "") + (timeInMins + rest) + ":" + 
    (timeInSecs < 10 ? "0" : "") + timeInSecs)
}

solve(4000, 0.60, 5)
// solve(2564, 0.70, 5.5)