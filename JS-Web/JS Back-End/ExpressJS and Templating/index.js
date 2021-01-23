const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 5002

app.use(express.static('public'))
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/test/:id', (req, res) => {
    res.send(`You are looking at "${req.params.id}"`)
})


app.listen(port, () => console.log(`Server is running on port: ${port}...`))