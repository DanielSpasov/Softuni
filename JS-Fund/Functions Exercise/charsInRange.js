function charInRange(charOne, charTwo) {

    let firstCharCode = charOne.charCodeAt(0)
    let secondCharCode = charTwo.charCodeAt(0)

    let result = ''

    if(firstCharCode > secondCharCode){
        for(let i = secondCharCode + 1; i < firstCharCode; i++){
            let currentChar = String.fromCharCode(i)
            result += `${currentChar} `
        }
    }

    if(firstCharCode < secondCharCode){
        for(let i = firstCharCode + 1; i < secondCharCode; i++){
            let currentChar = String.fromCharCode(i)
            result += `${currentChar} `
        }
    }

    console.log(result)
}