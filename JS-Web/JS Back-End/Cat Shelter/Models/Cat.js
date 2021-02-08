const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 300,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    },
    breed: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Cat', catSchema)