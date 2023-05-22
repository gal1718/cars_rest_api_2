const mongoose = require('mongoose')

const personSchema = mongoose.Schema(
    {
        name: String,
        age: String
    }
)

//compliling obj to model (document) and exporting person
module.exports = mongoose.model('person', personSchema, 'persons')