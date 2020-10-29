function solve(gCount, gType, day){

    let singlePersonPrice

    switch(day){
        case 'Friday':
            if(gType === 'Students'){
                singlePersonPrice = 8.45
            } else if (gType === 'Business'){
                singlePersonPrice = 10.90
            } else if (gType === 'Regular'){
                singlePersonPrice = 15
            }
        break
        case 'Saturday':
            if(gType === 'Students'){
                singlePersonPrice = 9.80
            } else if (gType === 'Business'){
                singlePersonPrice = 15.60
            } else if (gType === 'Regular'){
                singlePersonPrice = 20
            }
        break
        case 'Sunday':
            if(gType === 'Students'){
                singlePersonPrice = 10.46
            } else if (gType === 'Business'){
                singlePersonPrice = 16
            } else if (gType === 'Regular'){
                singlePersonPrice = 22.50
            }
        break
    }
    let priceWoDisc = gCount * singlePersonPrice
    let totalPrice = priceWoDisc

    if(gType === 'Students' && gCount >= 30){
        totalPrice *= 0.85
    } else if(gType === 'Business' && gCount >= 100){
        totalPrice = totalPrice - singlePersonPrice * 10
    } else if(gType === 'Regular' && gCount >= 10 && gCount <= 20){
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30, 'Students', 'Sunday')
solve(40, 'Regular', 'Saturday')