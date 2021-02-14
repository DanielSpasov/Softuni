const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        validate: {
            validator: (value) => {
                return /^[a-zA-Z0-9\ ]+$/.test(value)
            },
            message: () => `Invalid cube name`
        }
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        validate: {
            validator: (value) => {
                return /^[a-zA-Z0-9\ \,\.\?\!]+$/.test(value)
            },
            message: () => `Invalid cube description`
        }
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Cube', cubeSchema)