function solve(input){

    let x1 = +input.shift()
    let y1 = +input.shift()
    let x2 = +input.shift()
    let y2 = +input.shift()
    let x = +input.shift()
    let y = +input.shift()

    let firstCondition = (x == x1 || x == x2) && (y >= y1 && y <= y2)
    let secondCondition = (y == y1 || y == y2) && (x >= x1 && x <= x2)

    if(firstCondition || secondCondition){
        console.log("Border")
    } else {
        console.log("Inside / Outside")
    }
}

solve([

])