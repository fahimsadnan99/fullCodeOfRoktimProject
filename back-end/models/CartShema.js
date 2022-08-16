const mongoose = require("mongoose")


const CartSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required: true,
    },
    price: Number,
    count: {
        type: Number,
        default: 1,
        min: 1,
        max : 1000
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "User" 
    }
}, { timestamps: true })


module.exports = mongoose.model("cart", CartSchema)