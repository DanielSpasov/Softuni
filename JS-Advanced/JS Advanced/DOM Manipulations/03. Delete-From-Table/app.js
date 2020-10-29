function deleteByEmail() {

    let inputBox = document.getElementsByName('email')[0]
    let tableInfo = document.querySelectorAll('td')
    let resultDiv = document.getElementById('result')

    for (let i = 0; i < tableInfo.length; i++) {
        if (tableInfo[i].innerText === inputBox.value && tableInfo[i].innerText.includes('@')) {
            let parent = tableInfo[i].parentNode
            parent.remove()
            resultDiv.textContent = 'Deleted.'
        } else {
            resultDiv.textContent = 'Not found.'
        }
    }
}