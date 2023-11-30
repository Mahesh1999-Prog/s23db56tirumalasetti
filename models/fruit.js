const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
name: String,
color: String,
quantity: { type : Number,
    min : 2,
    max : 200000
}});
module.exports = mongoose.model("fruit", fruitSchema)