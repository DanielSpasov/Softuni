const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/index')

async function register(username, password) {
    let user = new User({ username, password })
    return await user.save()
}

async function login(username, password) {

    let user = await User.findOne({ username })
    if (!user) throw { message: 'Wrong username' }

    let passMatchHash = await bcrypt.compare(password, user.password)
    if (!passMatchHash) throw { message: 'Wrong password' }

    let token = jwt.sign({ _id: user._id, username: user.username }, SECRET)
    return token
}

module.exports = {
    register,
    login,
}