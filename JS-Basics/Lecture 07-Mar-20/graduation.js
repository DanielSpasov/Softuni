function solve(input) {

    let name = input.shift()
    let grade = +input.shift()

    let sumGrades = 0
    let totalGrades = 1

    while (!isNaN(grade) && totalGrades <= 12) {

        if (grade < 4) {
            grade = +input.shift()     
            continue
        }

        sumGrades += grade
        grade = +input.shift()     
        totalGrades++
    }
    let averageGrade = (sumGrades / 12)
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
}

solve(["Pesho",
    4,
    5.5,
    6,
    5.43,
    4.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5,
    6])