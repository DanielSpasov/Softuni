function toggle() {

    let button = document.getElementsByClassName('button')[0]
    let hiddenDiv = document.getElementById('extra')

    if (button.textContent == 'More') {
        hiddenDiv.style.display = 'block'
        button.textContent = 'Less'
    } else if (button.textContent == 'Less') {
        hiddenDiv.style.display = 'none'
        button.textContent = 'More'
    }
}