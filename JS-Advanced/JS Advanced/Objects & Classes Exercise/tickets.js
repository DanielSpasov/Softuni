function solve(input, sortBy) {
    
    let outputArr = []
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }
    
    for (line of input) {
        
        let [destination, price, status] = line.split('|')
        outputArr.push(new Ticket(destination, Number(price).toFixed(2), status))
    }
    
    switch (sortBy) {
        case 'destination':
            outputArr.sort((a, b) => a.destination.localeCompare(b.destination))
            break
        case 'status':
            outputArr.sort((a, b) => a.status.localeCompare(b.status))
            break
        case 'price':
            outputArr.sort((a, b) => a.price - b.price)
            break
    }

    return outputArr
}

// solve(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination')

// solve(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'status')

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price')