function solve(input) {

    input = JSON.parse(input)
    let result = {}

    input.forEach(obj => {
        let entries = Object.entries(obj)
        for(let [prop, value] of entries){
            if(!result.hasOwnProperty(prop)){
                result[prop] = value
            }
        }
    })

    return result
}

// solve(`[{"canMove": true},
//     {"canMove":true,"doors": 4},
//     {"capacity": 5}]`)

solve(`[{"canFly": true},
    {"canMove":true,"doors": 4},
    {"capacity":255},
    {"canFly":true, "canLand":true}]`)