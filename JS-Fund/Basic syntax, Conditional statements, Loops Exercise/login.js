function solve(input) {

    let username = input.shift()
    let password = input.shift()

    let correctPassword = ''
    let failsCounter = 0

    for (let i = username.length; i <= username.length; i--) {
        correctPassword += `${username.charAt(i)}`
        if(i == -1){
            break
        }
    }

    while (password !== correctPassword) {

        failsCounter++
        password = input.shift()

        if(failsCounter == 4){
            console.log(`User ${username} blocked!`)
            break
        }
        console.log(`Incorrect password. Try again.`)

    }
    if(password === correctPassword){
        console.log(`User ${username} logged in.`)
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA'])
solve(['momo', 'omom'])
solve(['sunny', 'rainy', 'couldy', 'sunny', 'not sunny'])