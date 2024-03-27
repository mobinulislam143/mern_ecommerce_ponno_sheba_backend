const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    division: {type: String},
    district: {type: String},
    area: {type: String},

},{timestamps: true,versionKey:false})

const LocationModel = mongoose.model('locations', DataSchema)
module.exports = LocationModel