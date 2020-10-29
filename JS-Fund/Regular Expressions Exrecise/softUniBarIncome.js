function solve(input) {

    let totalIncome = 0

    for(line of input){

        if(line === 'end of shift'){
            break
        }

        let match = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.?[0-9]*)\$/g.exec(line)

        if(match){
            let singlePrice = Number(match.groups.price) * Number(match.groups.quantity)
            totalIncome += singlePrice
    
            console.log(`${match.groups.name}: ${match.groups.product} - ${singlePrice.toFixed(2)}`)
        }
        
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])

// solve([
//     '%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'
// ])