function solve(input){  // Judge 68/100

    let income = Number(input.shift())
    let grade = Number(input.shift())
    let minSalary = Number(input.shift())

    let socSch = minSalary * 0.35
    let exGradeSch = grade * 25
    
    if(grade < 4.5){
        console.log(`You cannot get a scholarship!`)
    } else if(grade >= 5.5){
        if(income > minSalary){
            console.log(`You get a scholarship for exellent results ${exGradeSch} BGN`)
        } else if(income <= minSalary){
            if(exGradeSch >= socSch){
                console.log(`You get a scholarship for exellent results ${exGradeSch} BGN`)
            } else if(socSch > exGradeSch){
                console.log(`You get a Social scholarship ${socSch} BGN`)
            }
        }
    } else if(grade > 4.5){
        if(income <= minSalary){
            console.log(`You get a Social scholarship ${Math.floor(socSch)} BGN`)
        } else if(income > minSalary){
            console.log(`You cannot get a scholarship!`)
        }
    }
}

solve([
    300.00,
    5.65,
    420.00
])