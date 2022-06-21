const mongoose = require('mongoose');
const { stringify } = require('querystring');
const {SchemaTypes}=mongoose
require('../models/user')
require('../models/item')

const orderSchema = new mongoose.Schema({

    orderDate: {
        type: Date,
        default: Date.now
    },
    totalprice: {
        type: Number,
        required: true
    },
    userid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    items: [{
        itemid: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'item'
        }, qty: { type: Number, required: true }
    }],
    img: {
        type: String
    },

})

const orderModel = mongoose.model('order', orderSchema);

module.exports = { orderModel }
const order = {
    userid: "",
    itemes: [{ itemid: "", qty: 4 }, { itemid: "", qty: 4 }]

}
