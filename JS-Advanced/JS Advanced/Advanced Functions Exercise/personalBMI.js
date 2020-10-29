function solve(name, age, weight, height){

    let BMI = Math.round(weight / (Math.pow(height / 100, 2)))
    let status = calcStatus(BMI)

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: BMI,
        status: status
    }

    if(BMI >= 30){
        person.recommendation = 'admission required'
    }

    function calcStatus(BMI){
        if(BMI < 18.5){
            return 'underweight'
        } else if(BMI >= 18.5 && BMI < 25) {
            return 'normal'
        } else if(BMI >= 25 && BMI < 30) {
            return 'overweight'
        } else if(BMI >= 30) {
            return 'obese'
        }
    }
    
    return person
}

solve('Peter', 29, 75, 182)
solve('Honey Boo Boo', 9, 57, 137)