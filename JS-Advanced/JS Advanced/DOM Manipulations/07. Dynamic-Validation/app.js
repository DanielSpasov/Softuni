function validate() {
    
    let validator = /[a-z]+\@[a-z]+\.[a-z]+/
    let inputField = document.getElementById('email')
    inputField.addEventListener('change', () => {
        
        if(validator.test(inputField.value)){
            inputField.classList.remove('error')
        } else {
            inputField.classList.add('error')
        }
    })
}