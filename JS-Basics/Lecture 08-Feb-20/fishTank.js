function solve(input){

    let width = Number(input.shift())
    let lenght = Number(input.shift())
    let height = Number(input.shift())
    let percent = Number(input.shift())

    let capacity = width * lenght * height 
    let capacity2 = capacity * 0.001
    let percent2 = percent * 0.01
    let percent3 = 1 - percent2
    
    let litersNeeded = capacity2 * percent3
    let litersNeededR = litersNeeded.toFixed(3)

    console.log(litersNeededR)
}


solve([
    '85',
    '75',
    '47',
    '17'
])