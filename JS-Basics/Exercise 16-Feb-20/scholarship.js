function solve(input){      // Judge 68/100

    let income = Number(input.shift())
    let grade = Number(input.shift())
    let minimalWage = Number(input.shift())
    
    let SocScho = minimalWage * 0.35
    let ExResScho = grade * 25

    // No scholarship
    if(grade < 4.50){

        console.log(`You cannot get a scholarship!`)

    // Exellent results scholarship 
    } else if(income > minimalWage && grade >= 5.50){

        console.log(`You get a scholarship for exellent results ${Math.floor(ExResScho)} BGN`)

    } else if(income > minimalWage && grade < 5.50){

        console.log(`You cannot get a scholarship!`)

    } else if(grade >= 5.50 && income <= minimalWage){

        if(SocScho > ExResScho){
            console.log(`You get a Social scholarship ${Math.floor(SocScho)} BGN`)
        } else if(ExResScho > SocScho){
            console.log(`You get a scholarship for exellent results ${Math.floor(ExResScho)} BGN`)
        }

    // Social scholarship
    } else if(grade > 4.50 && income <= minimalWage){

        console.log(`You get a Social scholarship ${Math.floor(SocScho)} BGN`)
    }
}

solve([
    300.00,
    5.65,
    420.00
])