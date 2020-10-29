function solve() {

    let allButtons = document.getElementsByClassName('answer-text')
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    let rightAnswers = 0
    let steps = 0

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', () => {

            steps++
            let sections = document.querySelectorAll('section')
            let currentSection = sections[steps]
            let oldSection = sections[steps - 1]

            if(correctAnswers.includes(allButtons[i].textContent)){
                rightAnswers++
            }

            if (steps == 3) { // If the last answer is clicked
                oldSection.style.display = 'none'
                document.querySelector('#results').style.display = 'block'

                if(rightAnswers == 3){ // If the player have 3 right answers
                    document.querySelector('#results h1').textContent = 'You are recognized as top JavaScript fan!'
                } else { // If the player have less than 3 right answers
                    document.querySelector('#results h1').textContent = `You have ${rightAnswers} right answers`
                }

            } else { // If the last question is not reached
                oldSection.style.display = 'none'
                currentSection.style.display = 'block'
            }
        })
    }
}
