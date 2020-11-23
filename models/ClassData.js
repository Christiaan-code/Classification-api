const mongoose = require("mongoose");

const ClassifySchema = mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Classify", ClassifySchema, "Classifications");