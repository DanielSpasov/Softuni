function cats(input) {

    let cats = []
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
    }

    for (let i = 0; i < input.length; i++) {
        let catData = input[i].split(' ')
        let name, age
        [name, age] = [catData[0], catData[1]]
        cats.push(new Cat(name, age))
        console.log(`${cats[i].name}, age ${cats[i].age} says Meow`)
    }
}