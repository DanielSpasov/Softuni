const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
})

catSchema.methods.getInfo = function() {
    console.log(`>>> ${this.name} --- ${this.age} --- ${this.breed}`)
}

module.exports = mongoose.model('Cats', catSchema)