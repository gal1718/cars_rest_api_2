const mongoose = require('mongoose')

const carSchema = mongoose.Schema(
    {
        model: String,
        year: String,
        color: String
    }
)


//compliling obj to model (document) and exporting person
module.exports = mongoose.model('car', carSchema, 'cars')