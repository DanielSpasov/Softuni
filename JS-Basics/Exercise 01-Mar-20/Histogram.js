function solve(input){

    let n = +input.shift()

    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0


    for(let i = 0; i < n; i++){
        let number = +input.shift()

        if(number < 200){
            p1++
        } else if (number < 400){
            p2++
        } else if (number < 600){
            p3++
        } else if (number < 800){
            p4++
        } else {
            p5++
        }
    }
    
    let pe1 = (p1 / n) * 100
    let pe2 = (p2 / n) * 100
    let pe3 = (p3 / n) * 100
    let pe4 = (p4 / n) * 100
    let pe5 = (p5 / n) * 100

    console.log(`${pe1.toFixed(2)}%`)
    console.log(`${pe2.toFixed(2)}%`)
    console.log(`${pe3.toFixed(2)}%`)
    console.log(`${pe4.toFixed(2)}%`)
    console.log(`${pe5.toFixed(2)}%`)
}

solve([7,
    800,
    801,
    250,
    199,
    399,
    599,
    799,
])