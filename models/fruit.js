const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
name: { type : String,
    minlength : 4,
    maxlength : 12
},
color: { type : String,
    minlength : 3,
    maxlength : 6
},
quantity: { type : Number,
    min : 2,
    max : 200000
}});
module.exports = mongoose.model("fruit", fruitSchema)