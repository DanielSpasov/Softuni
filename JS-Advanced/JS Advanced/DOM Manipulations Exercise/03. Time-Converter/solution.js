function attachEventsListeners() {

    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')

    function click(ev) {
        
        let targetElement = ev.target
        let inputValue = targetElement.previousSibling.previousSibling.value

        if (targetElement.id === 'daysBtn') {
            hours.value = inputValue * 24
            minutes.value = inputValue * 1440
            seconds.value = inputValue * 86400
        } else if (targetElement.id === 'hoursBtn') {
            days.value = parseFloat((inputValue / 24).toString())
            minutes.value = inputValue * 60
            seconds.value = inputValue * 3600
        } else if (targetElement.id === 'minutesBtn') {
            days.value = parseFloat((inputValue / 1440).toString())
            hours.value = parseFloat((inputValue / 60).toString())
            seconds.value = inputValue * 60
        } else {
            days.value = parseFloat((inputValue / 86400).toString())
            hours.value = parseFloat((inputValue / 3600).toString())
            minutes.value = parseFloat((inputValue / 60).toString())
        }
    }

    [...document.querySelectorAll('input[type="button"]')].forEach(btn => {
        btn.addEventListener('click', click)
    })
}