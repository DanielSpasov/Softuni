function solve() {

    let selectMenu = document.getElementById('selectMenuTo')
    let binaryMenu = document.createElement('option')
    let hexadecimalMenu = document.createElement('option')
    binaryMenu.textContent = 'Binary'
    binaryMenu.value = 'binary'
    hexadecimalMenu.textContent = 'Hexadecimal'
    hexadecimalMenu.value = 'hexadecimal'
    selectMenu.appendChild(binaryMenu)
    selectMenu.appendChild(hexadecimalMenu)

    const selectMap = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    let convertButton = document.querySelector('button')
    convertButton.addEventListener('click', () => {

        let inputBox = document.getElementById('input')
        let outputBox = document.getElementById('result')

        outputBox.value = selectMap[selectMenu.value](Number(inputBox.value))
    })
}