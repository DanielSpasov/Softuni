function loadingBar(number) {

    let num = number.toString()
    let percents = num.charAt(0)
    let dots = 10 - percents

    if(num == 100){
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
    } else {
        console.log(`${num}% [${'%'.repeat([percents])}${'.'.repeat([dots])}]`)
        console.log('Still loading...')
    }
}