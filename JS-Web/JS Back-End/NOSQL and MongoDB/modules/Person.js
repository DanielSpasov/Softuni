const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

personSchema.methods.getInfo = function() {
    console.log(`>>> ${this.name} --- ${this.age}`)
}

module.exports = mongoose.model('People', personSchema)