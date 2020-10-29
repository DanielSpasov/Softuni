function addItem() {
    
    let inputText = document.getElementById('newText').value
    let parentList = document.querySelector('ul')
    let newItem = document.createElement('li')
    
    newItem.innerHTML = `${inputText} <a href="#">[Delete]</a>`
    newItem.addEventListener('click', deleteItem)
    parentList.appendChild(newItem)

    function deleteItem(item) {
        let el = item.target.parentNode
        el.remove()
    }
}