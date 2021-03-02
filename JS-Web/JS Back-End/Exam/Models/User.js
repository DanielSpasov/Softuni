const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = require('../config/index')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        validate: {
            validator: (value) => {
                return /^[a-zA-Z0-9]+$/.test(value)
            },
            message: () => {
                return `Invalid Password`
            }
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    amount: {
        type: Number,
        required: true,
        defualt: 0,
    },
    expenses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Expense'
    }],
})

userSchema.pre('save', function(next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => {
            return bcrypt.hash(this.password, salt)
        })
        .then(hash => {
            this.password = hash
            next()
        })
        .catch(err => console.log(err))
})

module.exports = mongoose.model('User', userSchema)