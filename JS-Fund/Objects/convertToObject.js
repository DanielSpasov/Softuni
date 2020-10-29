function convertToObject(input) {
    
    let obj = JSON.parse(input)
    
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
}