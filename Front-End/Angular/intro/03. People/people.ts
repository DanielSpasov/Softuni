abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} recieved ${this.getSalary()} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.salary = 1500;
        this.tasks.push(" is working on a simple task.");
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.salary = 3000;
        this.tasks.push(" is working on a simple task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers.");
    }
}

export class Manager extends Employee {
    public divident: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.salary = 6000;
        this.divident = 1200;
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is preparing a quarterly meeting.");
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

let newJunior = new Junior('Daniel Junior Spasov', 19)
console.log(newJunior.getSalary())

let newSenior = new Senior('Daniel Senior Spasov', 24)
console.log(newSenior.getSalary())

let newManager = new Manager('Daniel Manager Spasov', 30)
console.log(newManager.getSalary())