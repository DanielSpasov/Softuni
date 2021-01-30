const mongoose = require('mongoose')

const breedSchema = new mongoose.Schema({
    breed: String,
})

module.exports = mongoose.model('Breed', breedSchema)