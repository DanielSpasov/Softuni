class Bank { // Judge 81/100
    constructor(bankName) {
        this._bankName = bankName
        this.allCustomers = []
    }

    newCustomer(customer) {
        let isCustomer = this.allCustomers.find(c =>
            c.firstName === customer.firstName &&
            c.lastName === customer.lastName &&
            c.personalId === customer.personalId)
        if (isCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer)
        return customer
    }

    depositMoney(perID, amount) {
        let customer = this.allCustomers.find(c => c.personalId === perID)
        if (!customer) {
            throw new Error('We have no customer with this ID!')
        }
        if (!customer.hasOwnProperty('totalMoney')) {
            customer['totalMoney'] = amount
            customer['transInfo'] = [`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`]
            return `${customer.totalMoney}$`
        }
        customer.transInfo.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)
        customer.totalMoney += amount
        return `${customer.totalMoney}$`
    }

    withdrawMoney(perID, amount) {
        let customer = this.allCustomers.find(c => c.personalId === perID)
        if (!customer) {
            throw new Error('We have no customer with this ID!')
        }
        if (!customer.hasOwnProperty('totalMoney')) {
            customer['totalMoney'] = amount
            customer['transInfo'] = [`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`]
            return `${customer.totalMoney}$`
        }
        if(customer.totalMoney < amount){
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }
        customer.transInfo.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)
        customer.totalMoney -= amount
        return `${customer.totalMoney}$`
    }

    customerInfo(perID) {
        let customer = this.allCustomers.find(c => c.personalId === perID)
        if(!customer){
            throw new Error('We have no customer with this ID!')
        }
        let output = `Bank name: ${this._bankName}`
        output += `\nCustomer name: ${customer.firstName} ${customer.lastName}`
        output += `\nCustomer ID: ${customer.personalId}`
        output += `\nTotal money: ${customer.totalMoney}$`
        output += `\nTransactions:`
        let count = customer.transInfo.length
        customer.transInfo.reverse()
        customer.transInfo.forEach(t => {
            output += `\n${count}. ${t}`
            count--
        })
        return output
    }
}

let bank = new Bank("SoftUni Bank")

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }))
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }))

bank.depositMoney(6233267, 250)

console.log(bank.depositMoney(6233267, 250))

bank.depositMoney(4151596, 555)

console.log(bank.withdrawMoney(6233267, 125))
console.log(bank.customerInfo(6233267))