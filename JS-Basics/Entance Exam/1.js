function solve(input){

    let pencils = +input.shift()
    let markers = +input.shift()
    let liquidL = +input.shift()
    let discountPercent = +input.shift()

    let pencilsPrice = pencils * 5.80
    let markersPrice = markers * 7.20
    let liquidPrice = liquidL * 1.20

    let totalPrice = pencilsPrice + markersPrice + liquidPrice
    let totalPriceWithDiscount = totalPrice / 100 * (100 - discountPercent)
    console.log(totalPriceWithDiscount.toFixed(3))
}

solve([4,2,5,13])