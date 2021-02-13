const express = require('express')
const app = express()

const cors = require('./middlewares/cors')

app.use(cors)

app.get('/', (req, res) => {
    res.json({ message: 'Nice' })
})

app.listen(5000, console.log.bind(console, 'Listening on port 5k...'))