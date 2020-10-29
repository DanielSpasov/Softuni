function solve(input){

    let correctPassword = "s3cr3t!P@ssw0rd"
    let inputPassword = input.shift()


    if(inputPassword != correctPassword){
        console.log("Wrong password!")
    } else if(inputPassword === correctPassword){
        console.log("Welcome")
    }
}

solve(["s3cr3t!P@ssw0rd"])