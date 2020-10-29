function solve(input){

    let age = Number(input.shift())
    let gender = input.shift()

    if(gender == "m" && age < 16){
        console.log("Master")
    } else if(gender == "m" && age >= 16){
        console.log("Mr.")
    } else if(gender == "f" && age < 16){
        console.log("Miss")
    } else if(gender == "f" && age >= 16){
        console.log("Ms.")
    }
}

solve([
    17,
    "f"
])