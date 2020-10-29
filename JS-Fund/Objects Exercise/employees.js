function employees(input) {

    let employees = []
    class Employee {
        constructor(name, personalNum) {
            this.name = name
            this.personalNum = personalNum
        }
    }

    for (let i = 0; i < input.length; i++) {
        let name, personalNum
        [name, personalNum] = [input[i], input[i].length]
        employees.push(new Employee(name, personalNum))
    }
    
    for(let key in employees){
        console.log(`Name: ${employees[key].name} -- Personal Number: ${employees[key].personalNum}`)
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])