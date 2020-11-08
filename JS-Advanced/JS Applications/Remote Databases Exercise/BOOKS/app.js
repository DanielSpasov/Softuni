const htmlSelector = {
    'loadBooks': () => document.getElementById('loadBooks'),
    'createBtn': () => document.querySelector('#create-form button'),
    'createTitleInput': () => document.getElementById('create-title'),
    'createAuthorInput': () => document.getElementById('create-author'),
    'createIsbnInput': () => document.getElementById('create-isbn'),
    'booksContainer': () => document.querySelector('table > tbody'),
    'errorBox': () => document.getElementById('error-box'),
}

htmlSelector['loadBooks']()
    .addEventListener('click', fetchAllBooks)
htmlSelector['createBtn']()
    .addEventListener('click', createBook)

function fetchAllBooks() {
    fetch('https://books-exercise-a8751.firebaseio.com/Books/.json')
        .then(res => res.json())
        .then(renderBooks)
        .catch(handleError)
}

function renderBooks(booksData) {
    const booksContainer = htmlSelector['booksContainer']()

    if (booksContainer.innerHTML != '') {
        booksContainer.innerHTML = ''
    }

    Object
        .keys(booksData)
        .forEach(bookId => {
            const { title, author, isbn } = booksData[bookId]

            const tableRow = createElement('tr', '', {}, {},
                createElement('td', title, {}, {}),
                createElement('td', author, {}, {}),
                createElement('td', isbn, {}, {}),
                createElement('td', '', {}, {},
                    createElement('button', 'Edit', {}, {}),
                    createElement('button', 'Delete', {}, {})))
            booksContainer.appendChild(tableRow)
        })
}

function createBook(e) {
    e.preventDefault()
    let titleInput = htmlSelector['createTitleInput']()
    let authorInput = htmlSelector['createAuthorInput']()
    let isbnInput = htmlSelector['createIsbnInput']()

    if (titleInput.value != '' && authorInput.value != '' && isbnInput.value != '') {
        const initObj = {
            method: 'POST',
            headers: {
                'Content-type': 'applications/json'
            },
            body: JSON.stringify({ title: titleInput.value, author: authorInput.value, isbn: isbnInput.value })
        }
        fetch('https://books-exercise-a8751.firebaseio.com/Books/.json', initObj)
            .then(fetchAllBooks)
            .then(renderBooks)
    } else {
        const error = { message: '' }

        if (titleInput.value === '') {
            error.message += 'Title input must not be empty!'
        } else if (authorInput.value === '') {
            error.message += 'Author input must not be empty!'
        } else if (isbnInput.value === '') {
            error.message += 'ISBN input must not be empty!'
        }

        handleError()
    }
}

function handleError(err) {
    let errorBox = htmlSelector['errorBox']()
    errorBox.innerHTML = err.message
    errorBox.style.display = 'block'
    setTimeout(() => {
        errorBox.style.display = 'none'
    }, 3000)
    console.log(err)
}

function createElement(type, text, attributes, events, ...children) {
    const domElement = document.createElement(type)

    if (text !== '') {
        domElement.textContent = text
    }

    Object.entries(attributes)
        .forEach(([attrKey, attrValue]) => {
            domElement.setAttribute(attrKey, attrValue)
        })

    Object.entries(events)
        .forEach(([eventName, eventHandler]) => {
            domElement.addEventListener(eventName, eventHandler)
        })

    children
        .forEach((child) => {
            domElement.appendChild(child)
        })

    return domElement
}