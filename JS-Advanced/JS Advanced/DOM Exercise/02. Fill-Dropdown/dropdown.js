function addItem() {
    
    let textBoxEl = document.getElementById('newItemText')
    let valueBoxEl = document.getElementById('newItemValue')

    let dropDownMenu = document.getElementById('menu')
    let newOption = document.createElement('option')
    newOption.textContent = textBoxEl.value
    newOption.value = valueBoxEl.value
    dropDownMenu.appendChild(newOption)

    textBoxEl.value = ''
    valueBoxEl.value = ''
}