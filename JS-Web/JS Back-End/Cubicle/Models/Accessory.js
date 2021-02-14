const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
        minlength: 5,
        validate: {
            validator: (value) => {
                return /^[a-zA-Z0-9\ ]+$/.test(value)
            },
            message: () => `Invalid accessory name`
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
            message: () => `Invalid accessory description`
        }
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },
})

module.exports = mongoose.model('Accessory', accessorySchema)