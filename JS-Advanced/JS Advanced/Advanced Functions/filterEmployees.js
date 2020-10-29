function solve(input, criteria) {

    let arr = JSON.parse(input)
    let result = []
    
    arr.forEach(el => {
        if(validator(criteria, el)){
            result.push(el)
        }
    })
    
    for(let el in result){
        console.log(`${el}. ${result[el].first_name} ${result[el].last_name} - ${result[el].email}`)
    }
    
    function validator(crit, user){
        crit = crit.split('-')
        return user[crit[0]] === crit[1]
    }
}

// solve(`[{
//         "id": "1",
//         "first_name": "Ardine",
//         "last_name": "Bassam",
//         "email": "abassam0@cnn.com",
//         "gender": "Female"
//     }, {
//         "id": "2",
//         "first_name": "Kizzee",
//         "last_name": "Jost",
//         "email": "kjost1@forbes.com",
//         "gender": "Female"
//     }, {
//         "id": "3",
//         "first_name": "Evanne",
//         "last_name": "Maldin",
//         "email": "emaldin2@hostgator.com",
//         "gender": "Male"
//     }]`, 'gender-Female')

solve(`[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
    }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
    }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
    }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
    }]`, 'last_name-Johnson')
