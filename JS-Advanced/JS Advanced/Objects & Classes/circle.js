class Circle {
    constructor(radius){
        this.radius = radius
        this.diameter
        this.area = Math.PI * Math.pow(radius, 2)
    }
}


let c = new Circle(2)
console.log(`Radius: ${c.radius}`)
console.log(`Diameter: ${c.diameter}`)
console.log(`Area: ${c.area}`)
c.diameter = 1.6
console.log(`Radius: ${c.radius}`)
console.log(`Diameter: ${c.diameter}`)
console.log(`Area: ${c.area}`)