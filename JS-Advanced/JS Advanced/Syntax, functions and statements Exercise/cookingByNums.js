function solve(input) {

    let number = Number(input.shift())

    for (command of input) {
        switch (command) {
            case 'chop': number /= 2; break
            case 'dice': number = Math.sqrt(number); break
            case 'spice': number++; break
            case 'bake': number *= 3; break
            case 'fillet': number *= 0.80; break
        }
        console.log(number)
    }
}

// solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])