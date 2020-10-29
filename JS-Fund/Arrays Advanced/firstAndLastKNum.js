function firstAndLastKNum(input) {

    let k = +input.shift()
    let length = input.length

    console.log(input.slice(0, k).join(' '))
    console.log(input.slice(length - k, length).join(' '))
}

firstAndLastKNum([2, 7, 8, 9])
firstAndLastKNum([3, 6, 7, 8, 9])