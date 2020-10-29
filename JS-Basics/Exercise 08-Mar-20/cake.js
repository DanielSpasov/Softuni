function solve(input){

    let w = +input.shift()
    let l = +input.shift()

    let cakeArea = w * l

    let command = input.shift()

    while(command !== "STOP"){
        let pieces = +(command)
        cakeArea -= pieces

        if(cakeArea < 0){
            break
        }
        command = input.shift()
    }

    if(cakeArea >= 0){
        console.log(`${cakeArea} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeArea)} pieces more.`)
    }
}

solve([])