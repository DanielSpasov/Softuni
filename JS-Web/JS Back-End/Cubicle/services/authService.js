const bcrypt = require('bcrypt')
const User = require('../Models/User')
const { SECRET } = require('../config/config')
const jwt = require('jsonwebtoken')

const register = async ({ username, password }) => {
    const user = new User({ username, password })
    return await user.save()
}

const login = async ({ username, password }) => {

    let user = await User.findOne({ username })
    if (!user) throw { message: 'User not found' }

    let isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw { message: 'Wrong Password' }

    let token = jwt.sign({ _id: user._id, username: user.username, roles: ['admin'] }, SECRET)
    return token
}

module.exports = {
    register,
    login,
}