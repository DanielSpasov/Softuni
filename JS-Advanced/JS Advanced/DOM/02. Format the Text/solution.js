function solve() {

    let inputBoxText = document.getElementById('input').innerText
    let arrOfSentences = inputBoxText.split('. ')

    let parentElementOutput = document.getElementById('output')

    let loops = Math.ceil(arrOfSentences.length / 3)
    for (let i = 0; i < loops; i++) {
        let childElementOutput = document.createElement('p')
        for(let j = 0; j < 3; j++){
            if(arrOfSentences.length == 1){
                childElementOutput.innerHTML += arrOfSentences.shift()
                break
            }
            childElementOutput.innerHTML += arrOfSentences.shift() + '. '
        }
        parentElementOutput.appendChild(childElementOutput)
    }

    console.log(arrOfSentences)
}