function solve(input) {

    let n = +input.shift()
    let name = input.shift()

    let totalAvg = 0
    let presCount = 0

    while (name !== "Finish") {

        presCount++
        let avgGrade = 0

        for (let i = 0; i < n; i++) {
            let grade = +input.shift()
            avgGrade += grade

        }

        avgGrade /= n
        console.log(`${name} - ${avgGrade.toFixed(2)}.`)
        totalAvg += avgGrade

        name = input.shift()
    }
    totalAvg /= presCount
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`)
}

solve([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish',
    ''
  ])