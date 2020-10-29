function solve(input) {

    let negativeGrades = +input.shift()
    let command = input.shift()

    let countNegative = 0
    let lastProblem = ""
    let countProblems = 0
    let resolveProblemCount = 0
    let isNeedBreak = false
    let totalGrade = 0

    while (command !== "Enough") {
        let taskName = command
        let grade = +input.shift()
        lastProblem = taskName
        countProblems++

        if (grade <= 4.00) {
            countNegative++
        }
        resolveProblemCount++
        totalGrade += grade


        if (countNegative == negativeGrades) {
            isNeedBreak = true
            break
        }

        command = input.shift()
    }
    if (isNeedBreak) {
        console.log(`You need a break, ${negativeGrades} poor grades.`)
    } else {
        console.log(`Average score: ${(totalGrade / resolveProblemCount).toFixed(2)}`)
        console.log(`Number of problems: ${resolveProblemCount}`)
        console.log(`Last problem: ${lastProblem}`)
    }
}

solve([
    '3', 'Money',
    '6', 'Story',
    '4', 'Spring Time',
    '5', 'Bus',
    '6', 'Enough'
])