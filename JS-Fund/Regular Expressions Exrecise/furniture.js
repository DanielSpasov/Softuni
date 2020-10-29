function solve(input) {

    let boughtFurnitures = []
    let totalMoneySpend = 0

    for (data of input) {
        let match = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g.exec(data)

        if(match){
            boughtFurnitures.push(match.groups.name)
            totalMoneySpend += Number(match.groups.price) * Number(match.groups.quantity)
        }
    }

    console.log('Bought furniture:')
    if(boughtFurnitures.length > 0){
        console.log(boughtFurnitures.join('\n'))
    }
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`)
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])