const mongoose = require("mongoose")

const Order = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required: true,
    },
    address : {
        type : String,
        required: true,
    },
    city : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
    },
    name : {
        type : String,
        required: true,
    },
    phone : {
        type : String,
        required: true,
    },
    postCode : {
        type : String,
        required: true,
    },
    item : Array,
    cardInfo : Object,
    paid : {
        type : String,
        enum : ["Yes","No"],
        default : "No"
    },
    status : {
        type : String,
        enum : ["Pending","On Going","Done"],
        default : "Pending"
    },
    totalPrice : {
        type : Number,
        required: true,
    }

},{ timestamps: true })

module.exports = mongoose.model("order", Order)