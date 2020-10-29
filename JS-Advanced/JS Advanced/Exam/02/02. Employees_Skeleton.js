function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
            this.baseSalary = 1000
            this.tasks = []
            this.experience = 0
        }

        addTask(id, taskName, priority) {
            let newTask = { id: id, name: taskName, priority: priority }
            if (priority === 'high') {
                this.tasks.unshift(newTask)
            } else {
                this.tasks.push(newTask)
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        }

        doTask() {
            if (this.tasks.length == 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            let taskDone = this.tasks.shift()
            return taskDone.name
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let output = `Tasks, that need to be completed:`
            this.tasks.forEach(task => {
                output += `\n${task.id}: ${task.name} - ${task.priority}`
            })

            return output
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary = 1000 + bonus
            this.tasks = []
            this.experience = experience
        }

        learn(years) {
            this.experience += years
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary = 1000 + bonus
            this.tasks = []
            this.experience = experience + 5
        }

        changeTaskPriority(taskID) {
            let task = this.tasks.find(x => x.id == taskID)
            if (task.priority === 'high ') {
                task.priority = 'low'
            } else if (task.priority === 'low') {
                task.priority = 'high'
                let index = this.tasks.indexOf(task)
                this.tasks.splice(index, 1)
                this.tasks.unshift(task)
            }
            return task
        }
    }
    return { Developer, Junior, Senior }
}

let classes = solveClasses()
const developer = new classes.Developer("George", "Joestar")
console.log(developer.addTask(1, "Inspect bug", "low"))
console.log(developer.addTask(2, "Update repository", "high"))
console.log(developer.reviewTasks())
console.log(developer.getSalary())
console.log()
const junior = new classes.Junior("Jonathan", "Joestar", 200, 2)
console.log(junior.getSalary())
console.log()
const senior = new classes.Senior("Joseph", "Joestar", 200, 2)
senior.addTask(1, "Create functionality", "low")
senior.addTask(2, "Update functionality", "high")
console.log(senior.changeTaskPriority(1)["priority"])

// Corresponding output
// Task id 1, with low priority, has been added.
// Task id 2, with high priority, has been added.
// Tasks, that need to be completed:
// 2: Update repository - high
// 1: Inspect bug - low

// George Joestar has a salary of: 1000

// Jonathan Joestar has a salary of: 1200

// high

