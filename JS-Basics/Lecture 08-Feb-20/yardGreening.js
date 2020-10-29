function solve(input){

    let taxForM = 7.61
    let mToBeGreened = Number(input.shift())

    // console.log(`${mToBeGreened}`)

    // Final price calculations
    let finalPriceNR = mToBeGreened * taxForM
    let ds1 = finalPriceNR / 100
    let ds2 = ds1 * 18
    let dsR = ds2.toFixed(2)
    let discount = dsR
    let need1 = finalPriceNR - discount
    let finalPrice = need1.toFixed(2)

    
    
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

solve([
    '40'
])
