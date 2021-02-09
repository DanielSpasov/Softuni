const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxLength: 16,
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('User', userSchema)