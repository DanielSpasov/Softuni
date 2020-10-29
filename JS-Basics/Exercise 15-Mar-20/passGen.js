function solve(input) {

    let num = +input.shift()
    let l = +input.shift()

    let output = ""

    for (let i = 1; i < num; i++) {
        for (let j = 1; j < num; j++) {
            for (let k = 97; k < 97 + l; k++) {
                for (let m = 97; m < 97 + l; m++) {
                    for (let n = 1; n <= num; n++) {
                        if (n > i && n > j) {
                            output += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(m)}${n} `
                        }
                    }
                }
            }
        }
    }
    console.log(output)
}

solve([2,4])