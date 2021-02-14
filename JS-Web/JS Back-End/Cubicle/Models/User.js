const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = require('../config/config')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        validate: {
            validator: (value) => {
                return /^[a-zA-Z0-9]+$/.test(value)
            },
            message: () => {
                return `Invalid Username`
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: (value) => {
                return /^[a-zA-Z0-9]+$/.test(value)
            },
            message: () => {
                return `Invalid Password`
            }
        }
    }
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