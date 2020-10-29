function addItem() {
    
    let inputText = document.getElementById('newItemText').value
    let parentList = document.querySelector('ul')
    let newItem = document.createElement('li')
    newItem.textContent = inputText
    parentList.appendChild(newItem)
}