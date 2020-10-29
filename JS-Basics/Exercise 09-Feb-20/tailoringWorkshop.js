function solve(input){

    let tables = Number(input.shift())
    let lenght = Number(input.shift())
    let width = Number(input.shift())

    let pokrivki = tables * ((lenght + 0.60) * (width + 0.60))
    let kareta = tables * ((lenght / 2) * (lenght / 2))

    let usd = pokrivki * 7 + kareta * 9
    let bgn = usd * 1.85

    console.log(`${usd.toFixed(2)} USD`)
    console.log(`${bgn.toFixed(2)} BGN`)
}

solve([
    5,
    1.00,
    0.50
])