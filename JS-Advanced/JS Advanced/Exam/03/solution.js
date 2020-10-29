class Parking {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length == this.capacity) {
            throw new Error('Not enough parking space.')
        }
        let car = { carModel, carNumber, payed: false }
        this.vehicles.push(car)
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber)
        let index = this.vehicles.indexOf(car)
        if (car == undefined) {
            throw new Error("The car, you're looking for, is not found.")
        }
        if(car.payed == false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(index, 1)
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber)
        if (car == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if(car.payed == true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        car.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if(carNumber == undefined){
            let output = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`
            let sortedArr = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
            sortedArr.forEach(v => {
                output += `\n${v.carModel} == ${v.carNumber} - ${v.payed ? 'Has payed' : 'Not payed'}`
            })
            return output
        } else {
            let car = this.vehicles.find(x => x.carNumber === carNumber)
            return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`
        }
    }
}

const parking = new Parking(12)

console.log(parking.addCar("Volvo t600", "TX3691CA"))
console.log(parking.getStatistics())

console.log(parking.pay("TX3691CA"))
console.log(parking.removeCar("TX3691CA"))


// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA's driver successfully payed for his stay.
// TX3691CA left the parking lot.

