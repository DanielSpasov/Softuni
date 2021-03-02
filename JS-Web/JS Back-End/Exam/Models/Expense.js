const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    merchant: {
        type: String,
        required: true,
        minLength: 4,
    },
    total: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    report: {
        type: Boolean,
        required: true,
        default: false,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        reuired: true,
        ref: 'User',
    },
})

module.exports = mongoose.model('Expense', expenseSchema)