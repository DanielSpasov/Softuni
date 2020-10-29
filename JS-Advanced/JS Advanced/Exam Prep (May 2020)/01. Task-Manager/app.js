function solve() {

    let sections = document.querySelectorAll('section')
    let [addTaskTab, open, inProgress, completeTab] = sections

    let task = document.getElementById('task')
    let description = document.getElementById('description')
    let date = document.getElementById('date')
    let addBtn = document.getElementById('add')

    addBtn.addEventListener('click', addTask)

    function addTask(e) {
        e.preventDefault()

        // Validation
        if (!task.value) {
            return
        }
        if (!description.value) {
            return
        }
        if (!date.value) {
            return
        }

        let div = open.children[1]

        // Creating
        let article = document.createElement('article')
        let h3 = document.createElement('h3')
        let descP = document.createElement('p')
        let dateP = document.createElement('p')
        let flexDiv = document.createElement('div')
        let startBtn = document.createElement('button')
        let deleteBtn = document.createElement('button')

        // Giving them fucking life
        h3.innerHTML = task.value
        descP.innerHTML = `Description: ${description.value}`
        dateP.innerHTML = `Due Date: ${date.value}`
        startBtn.classList.add('green')
        deleteBtn.classList.add('red')
        startBtn.innerHTML = 'Start'
        deleteBtn.innerHTML = 'Delete'
        flexDiv.classList.add('flex')

        // Appending
        flexDiv.appendChild(startBtn)
        flexDiv.appendChild(deleteBtn)
        article.appendChild(h3)
        article.appendChild(descP)
        article.appendChild(dateP)
        article.appendChild(flexDiv)
        div.appendChild(article)
        
        // Event listeners to the Start and Delete buttons
        startBtn.addEventListener('click', startTask)
        deleteBtn.addEventListener('click', deleteTask)
    }

    function startTask(e){

        let article = e.currentTarget.parentElement.parentElement
        let inProgressDiv = document.getElementById('in-progress')

        let flexDiv = e.currentTarget.parentElement
        flexDiv.children[0].remove()
        let finishBtn = document.createElement('button')
        finishBtn.classList.add('orange')
        finishBtn.innerHTML = 'Finish'

        flexDiv.appendChild(finishBtn)
        inProgressDiv.appendChild(article)

        finishBtn.addEventListener('click', finishTask)
    }

    function finishTask(e){

        let article = e.currentTarget.parentElement.parentElement
        let flexDiv = e.currentTarget.parentElement
        flexDiv.remove()
        let completeDiv = completeTab.children[1]

        completeDiv.appendChild(article)
        console.log(completeDiv)
    }

    function deleteTask(e){
        e.currentTarget.parentElement.parentElement.remove()
    }
}