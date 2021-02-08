const mongoose = require('mongoose')

const breedSchema = new mongoose.Schema({
    breed: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Breed', breedSchema)