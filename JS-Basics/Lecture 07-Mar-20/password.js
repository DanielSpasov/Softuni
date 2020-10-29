function solve(input) {

    let username = input.shift()
    let password = input.shift()

    let data = input.shift()

    while(data !== password){
        data = input.shift()
    }
    console.log(`Welcome ${username}!`)
}

solve(["Nakov",1234,"pass",1234,1234])