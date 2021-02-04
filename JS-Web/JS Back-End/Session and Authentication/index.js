const express = require('express')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cookieParser())
app.use(expressSession({
    secret: 'skrr',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/register/:username/:password', (req, res) => {
    let plainTextPassword = req.params.password
    req.session.username = req.params.username

    bcrypt.genSalt(9, (err, salt) => {
        if (err) console.log(err)

        bcrypt.hash(plainTextPassword, salt, (err, hash) => {
            if (err) console.log(err)
            req.session.hash = hash
            res.send('Logged In')
        })
    })
})

app.get('/login/:password', (req, res) => {
    bcrypt.compare(req.params.password, req.session.hash, (err, isIdentical) => {
        console.log(isIdentical)
        res.send(isIdentical ? 'Logged in' : 'Error Login')
    })
})

app.get('/compare/:password', (req, res) => {
    let hash = '$2b$09$/numySWGNQvw.8CXzeifhehG4G4Hd6HOdIsAjt0NRTDGxBdQavH/G'

    bcrypt.compare(req.params.password, hash, (err, isIdentical) => {
        console.log(isIdentical)
    })
})

app.get('/show', (req, res) => {
    console.log(req.cookies)
    res.json(req.cookies.username)
})

app.get('/token/create', (req, res) => {
    
})

app.listen(5000, () => console.log('Listening on port 5k...'))