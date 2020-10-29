function solve() {

    let inputBox = document.querySelector('input')
    let button = document.querySelector('button')
    let orderedList = document.querySelector('ol')
    let listedItems = orderedList.querySelectorAll('li')

    button.addEventListener('click', () => {

        let name = inputBox.value
        let letterNum = alphabet[name[0].toLowerCase()]

        let letterArr = listedItems[letterNum].textContent.split('. ').filter(a => a !== '')
        letterArr.push(name[0].toUpperCase() + name.substr(1).toLowerCase())

        if(letterArr.length > 1){
            listedItems[letterNum].textContent = letterArr.join(', ')
        } else {
            listedItems[letterNum].textContent = letterArr[0]
        }

        inputBox.value = ''
    })

    let alphabet = {
        a: 0, b: 1, c: 2,  d: 3, 
        e: 4, f: 5, g: 6, h: 7, 
        i: 8, j: 9, k: 10, l: 11, 
        m: 12, n: 13, o: 14, p: 15, 
        q: 16, r: 17, s: 18, t: 19, 
        u: 20, v: 21, w: 22, x: 23, 
        y: 24,z: 25
    }
}