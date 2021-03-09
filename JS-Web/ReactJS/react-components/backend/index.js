const express = require('express')
const app = express()
const PORT = 5000

require('./mongoose')

// FIX CORS
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
})



const Book = require('./Models/Book')

app.get('/books', (req, res) => {
    Book.find({})
        .then(books => {
            res.send(JSON.stringify(books))
        })
        .catch(err => console.log(err))
})



app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))