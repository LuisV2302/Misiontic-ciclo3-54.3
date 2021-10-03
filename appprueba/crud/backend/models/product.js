let mongoose = require("mongoose");
let schema = mongoose.schema;
let productsSchema = new Schema(
    {
        name: {
            type: String,
        },
        existencia: {
            type: Number,
        },
        fecha: {
            type: Date,
        }
    },{
        collection: "inventory",
    }
);
module.exports = mongoose.model("product", productsSchema);