const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
    name: String,
    description: String,
    imagePath: String,
    breed: String,
})

module.exports = mongoose.model('Cat', catSchema)