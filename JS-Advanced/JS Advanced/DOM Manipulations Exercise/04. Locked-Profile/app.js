function lockedProfile() {

    let profiles = document.getElementsByClassName('profile')

    Array.from(profiles).forEach(prof => {
        prof.querySelector('button').addEventListener('click', () => {

            let isLocked = prof.querySelector('input').checked
            if (!isLocked) {

                let button = prof.querySelector('button')
                
                if(button.textContent === 'Show more'){
                    prof.querySelector('div').style = 'display: block'
                    button.textContent = 'Hide it'

                } else if (button.textContent === 'Hide it'){
                    prof.querySelector('div').style = 'display: none'
                    button.textContent = 'Show more'
                }
            }
        })
    })
}