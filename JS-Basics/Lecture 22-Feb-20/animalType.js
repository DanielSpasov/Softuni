function solve(input){

    let animal = input.shift()

    switch(animal){
        case "dog": console.log("mammal"); break
        case "crocodile":
        case "snake":
        case "tortoise": console.log("reptile"); break
        default: console.log("unknown")
    }
}

solve([
    "dog"
])