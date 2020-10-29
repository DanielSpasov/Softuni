function solve(input) {

    let name = input.shift();
    let grade = 1;
    let sumGrade = 0;
    let excluded = 0;
    let isExcluded = false;

    while (grade <= 12) {
        let command = +input.shift()

        if (command >= 4.0) {
            grade++;
            sumGrade += command;
        }
        if (command < 4.0) {
            excluded++;
        }
        if (excluded >= 2) {
            isExcluded = true;
            break;
        }
    }
    if (!isExcluded) {
        let avg = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`)
    } else {
        console.log(`${name} has been excluded at ${grade} grade`)
    }
}

solve([
    'Mimi', '5', '6',
    '5', '6', '5',
    '6', '6', '2',
    '3'
])