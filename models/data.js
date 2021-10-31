const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    Symbol: String,
    Name: String,
    Sector: String,
    Validtill: Number
}, { timestamp: true })

const dataModel = mongoose.model(dataModel, dataSchema);
module.exports = dataModel;