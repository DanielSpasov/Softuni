function solve(input){

    let figure = input.shift()

    // Square
    if(figure === "square"){
        let a = Number(input.shift())
        let S = a * a
        console.log(S.toFixed(3))

    // Rectangle
    } else if(figure === "rectangle"){
        let a = Number(input.shift())
        let b = Number(input.shift())
        let S = a * b
        console.log(S.toFixed(3))

    // Circle
    } else if(figure === "circle"){
        let r = Number(input.shift())
        let S = (Math.PI * (r * r))
        console.log(S.toFixed(3))

    // Triangle
    } else if(figure === "triangle"){
        let a = Number(input.shift())
        let h = Number(input.shift())
        let S = (a * h) / 2
        console.log(S.toFixed(3))
    }
}


solve(["triangle", 10, 7.5])