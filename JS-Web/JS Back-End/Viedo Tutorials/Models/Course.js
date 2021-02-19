const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    courseDate: {
        type: String,
        required: true,
    },
    usersEnrolled: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
})

module.exports = mongoose.model('Course', courseSchema)