// Imports
const express = require('express')
const formidable = require('express-formidable')
const handlebars = require('express-handlebars')
const fs = require('fs')
const db = require('./database/db')

const app = express()
port = 5000

// Load database
require('./database/db')
// Schemas
const Breed = require('./database/modules/Breed')
const Cat = require('./database/modules/Cat')

// App.use
app.use('/static', express.static('public'))
app.use(formidable({
    encoding: 'utf8',
    uploadDir: __dirname + '/public/uploads',
    multiples: true,
    keepExtensions: true
}))
app.engine('hbs', handlebars())
app.set('view engine', 'hbs')



// Routes
app.get('/', (req, res) => {

    let cats = []
    Cat.find({})
        .then(data => {
            data.forEach(x => {
                cats.push({
                    name: x.name,
                    description: x.description,
                    imagePath: x.imagePath,
                    breed: x.breed,
                    id: x._id
                })
            })
        })
        .then(() => {
            res.render('index', { cat: cats })
        })
})

app.get('/addBreed', (req, res) => {
    res.render('addBreed')
})
app.post('/addBreed', (req, res) => {

    let breedExists = false
    Breed.find({})
        .then(data => {
            data.forEach(x => {
                if (x.breed === req.fields.breed) {
                    breedExists = true
                    return
                }
            })
        })
        .then(() => {
            if (breedExists || !req.fields.breed) {
                console.error('Breed already exists.')
            } else {
                let breed = new Breed({ breed: req.fields.breed })
                breed.save((err, result) => {
                    if (err) return console.log(err)
                    console.log(`New breed added: ${result.breed}.`)
                })
            }
        })
        .then(() => {
            res.redirect('/addBreed')
        })
})

app.get('/addCat', (req, res) => {

    let breeds = []
    Breed.find({})
        .then(data => {
            data.forEach(x => breeds.push({ name: x.breed }))
        })
        .then(() => {
            res.render('addCat', { breed: breeds })
        })
})
app.post('/addCat', (req, res) => {

    if (!req.files.upload.type || req.files.upload.type !== 'image/jpeg') {
        fs.unlink(req.files.upload.path, () => { return })
        return
    }
    if (!req.fields.name) {
        return
    }
    if (!req.fields.description) {
        return
    }
    if (!req.fields.breed) {
        return
    }

    let pathSplitted = req.files.upload.path.split('\\')
    let modifiedImgPath = `/static/uploads/${pathSplitted[pathSplitted.length - 1]}`
    let cat = new Cat({
        name: req.fields.name,
        description: req.fields.description,
        breed: req.fields.breed,
        imagePath: modifiedImgPath,
    })
    cat.save((err, result) => {
        if (err) return console.log(err)
        console.log(`New cat added: ${result}.`)
    })
    res.redirect('/addCat')
})

app.get('/editCat/:id', (req, res) => {

    let id = req.url.split('/')[2]
    let cat = {}
    let catsBreed = ''
    Cat.findById(id)
        .then(data => {
            cat.id = data._id,
                cat.name = data.name,
                cat.description = data.description,
                cat.imagePath = data.imagePath,
                cat.breed = data.breed,
                catsBreed = data.breed
        })

    let breeds = []
    Breed.find({})
        .then(data => {
            data.forEach(x => {
                if (catsBreed === x.breed) {
                    return
                } else {
                    breeds.push({ name: x.breed })
                }
            })
        })

    res.render('editCat', { breed: breeds, cat: cat })
})
app.post('/editCat/:id', (req, res) => {

    let id = req.url.split('/')[2]
    let dbCat = {}
    Cat.findById(id)
        .then(data => {
            dbCat.name = data.name,
            dbCat.description = data.description,
            dbCat.imagePath = data.imagePath,
            dbCat.breed = data.breed
        })
        .then(() => {
            if (!req.files.upload.type || req.files.upload.type !== 'image/jpeg') {
                fs.unlink(req.files.upload.path, () => { return })
                delete dbCat.imagePath
            } else {
                let pathSplitted = req.files.upload.path.split('\\')
                let modifiedImgPath = `/static/uploads/${pathSplitted[pathSplitted.length - 1]}`
                dbCat.imagePath = modifiedImgPath
            }
            if (req.fields.name !== dbCat.name) {
                dbCat.name = req.fields.name
            } else {
                delete dbCat.name
            }
            if (req.fields.description !== dbCat.description) {
                dbCat.description = req.fields.description
            } else {
                delete dbCat.description
            }
            if (req.fields.breed !== dbCat.breed) {
                dbCat.breed = req.fields.breed
            } else {
                delete dbCat.breed
            }

            console.log(dbCat)

        })
})



// App.listen
app.listen(port, () => console.log(`Server listening on port ${port}...`))

