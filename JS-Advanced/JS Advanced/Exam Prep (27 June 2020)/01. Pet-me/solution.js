function solve() {

    let btn = document.querySelector('#container button')
    let inputs = document.querySelectorAll('#container input')
    let [name, age, kind, owner] = inputs
    let adoption = document.getElementById('adoption')
    let adopted = document.getElementById('adopted')


    btn.addEventListener('click', e => {
        e.preventDefault()

        // Validating
        if (!inputElements.every(x => x.value)) {
            return
        }
        if (!Number(ageElement.value)) {
            return
        }

        // Create List Item
        let li = document.createElement('li')
        let p = document.createElement('p')
        let span = document.createElement('span')
        let contactBtn = document.createElement('button')

        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`
        span.innerHTML = `Owner: ${owner.value}`
        contactBtn.innerHTML = 'Contact with owner'

        li.appendChild(p)
        li.appendChild(span)
        li.appendChild(contactBtn)
        adoption.appendChild(li)

        // Clearing the fields
        name.value = ''
        age.value = ''
        kind.value = ''
        owner.value = ''

        // Contact with owner button
        contactBtn.addEventListener('click', contanctWithOwner)
    })



    function contanctWithOwner(e) {

        let parent = e.currentTarget.parentElement
        e.currentTarget.remove()

        // Adding the Div
        let div = document.createElement('div')
        let input = document.createElement('input')
        let yesBtn = document.createElement('button')

        input.placeholder = 'Enter your names'
        yesBtn.innerHTML = 'Yes! I take it!'

        div.appendChild(yesBtn)
        div.appendChild(input)
        parent.appendChild(div)

        // Yes! I take it! button
        yesBtn.addEventListener('click', yesITakeIt)
    }

    function yesITakeIt(e) {

        let parentButton = e.currentTarget.parentElement
        let li = parentButtonElement.parentElement

        let newOwner = li.querySelector('input')
        let ownerSpan = li.querySelector('span')

        // Validation
        if (!newOwner.value) {
            return
        }

        ownerSpan.innerHTML = `New Owner: ${newOwner.value}`
        adopted.appendChild(li)
        parentButtonElement.remove()

        let checkedBtn = document.createElement('button')
        checkedBtn.innerHTML = 'Checked'

        li.appendChild(checkedBtn)

        checkedBtn.addEventListener('click', e => {
            e.currentTarget.parentElement.remove()
        })
    }
}


