const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    sandwitchType: {
        type: String,
        required: true
    },
    toppings: {
        type: Array,
        required: true
    },
    spice: {
        type: Number,
        required: true
    },
    cheese: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model("Order", orderSchema)