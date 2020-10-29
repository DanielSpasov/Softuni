function notify(message) {

    let resultDiv = document.getElementById('notification')
    resultDiv.textContent = message
    resultDiv.style = 'display: block'

    setTimeout(() => {
        resultDiv.style = 'display: none'
    }, 2000)
}