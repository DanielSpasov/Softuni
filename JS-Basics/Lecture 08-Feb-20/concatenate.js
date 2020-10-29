function solve(input){

    let firstName = input.shift()
    let lastName = input.shift()
    let age = Number(input.shift())
    let city = input.shift()

    let personInfo = `You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`

    console.log(personInfo)

}


solve([
    'Daniel',
    'Spasov',
    '17',
    'Sofia'
])