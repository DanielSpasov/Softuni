const mongoose = require('mongoose')

module.exports = (app) => {
    const uri = 'mongodb://localhost:27017/cubicle'
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'Connection error:'))
    db.once('open', () => console.log('Connected to database!'))
}