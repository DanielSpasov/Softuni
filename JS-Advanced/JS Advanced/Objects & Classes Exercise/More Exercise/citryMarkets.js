function solve(input){

    const reg = new Map()
    
    // Registering
    for(line of input){
        
        let info = /(?<town>[A-Za-z ]+)\ ->\ (?<product>[A-Za-z0-9 ]+)\ ->\ (?<sales>[0-9]+)\ :\ (?<price>[0-9.]+)/.exec(line)

        let town = info.groups.town
        let product = info.groups.product
        let income = Number(info.groups.price) * Number(info.groups.sales)

        if(reg.has(town)){
            reg.get(town).push({product: product, income: income})
        } else {
            reg.set(town, [{product: product, income: income}])
        }
    }

    // Ouput
    for(town of reg){
        console.log(`Town - ${town[0]}`)
        for(kvp of town[1]){
            console.log(`$$$${kvp.product} : ${kvp.income}`)
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'])