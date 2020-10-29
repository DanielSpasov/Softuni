function solve(input){

    let allMatches = input[0].match(/[A-Za-z]+/g)
    const reg = {}

    for(word of allMatches){
        if(reg.hasOwnProperty(word)){
            reg[word]++
        } else {
            reg[word] = 1
        }
    }

    console.log(JSON.stringify(reg))
}

solve(["Far too slow, you're far too slow."])
solve(['JS devs use Node.js for server-side JS.-- JS for devs'])