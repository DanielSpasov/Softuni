const mongoose = require('mongoose')
const Person = require('./modules/Person')
const Cat = require('./modules/Cats')

const uri = 'mongodb://localhost:27017/testdb'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })


const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Connected to database!')
})

// Creating an Object in the collection
//
// let cat = new Cat({name: 'Navcho', age: 9, breed: 'Scottish'})

// Saving the Object in the collection
//
// cat.save((err, result) => {
//     if (err) return console.log(err)
//     console.log(result)
// })

// Logging everything in the collection [ .getInfo() must be created manualy ]
//
// Cat.find({})
//     .then(data => {
//         data.forEach(cat => cat.getInfo())
//     })

// Finding something by ID
//
// Person.findById('600bba5720623e0418d364ce')


// Updating something in the collection
//
// Person.updateOne({_id: '600bba5720623e0418d364ce'}, {$set: { name: 'Ceckata'}})


// Mix of the top 2
//
// Person.findByIdAndUpdate('600bba5720623e0418d364ce', {$set: {age: 20}})


// Deleting something
//
// Person.remove({name: 'Gosho'})


// The short way to do it
//
// Person.findById('600bba5720623e0418d364ce')
//     .then(person => {
//         person.name = 'Ceci'
//         person.save()
//     })


// Show only some properties of the Object
//
// Person.findById('600bba5720623e0418d364ce')
//     .select('name')
//     .then(res => {
//         console.log(res)
//     })


// Sorting // age: 1 - accending, age: -1 - descending
//
// Person.find({})
//     .sort({ age: 1 })
//     .then(res => console.log(res))
