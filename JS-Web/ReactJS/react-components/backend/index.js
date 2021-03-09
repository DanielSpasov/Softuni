const express = require('express')
const app = express()
const PORT = 5000

// FIX CORS
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
})



app.get('/books', (req, res) => {
    res.send(JSON.stringify(books))
})



app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))

let books = [
    {
        "id": "1",
        "title": "The Witcher",
        "description": "Swords and Signs"
    },
    {
        "id": "2",
        "title": "The Bible",
        "description": "Isuskata"
    },
    {
        "id": "3",
        "title": "Koran",
        "description": "Allah"
    },
    {
        "id": "4",
        "title": "Programing with JS",
        "description": "I dvamata da si na pomosht"
    }
]