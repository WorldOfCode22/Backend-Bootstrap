const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var collection = new Schema({
    id: String,
    name: String
});

module.exports = mongoose.model("test",collection);