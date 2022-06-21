const mongoose = require('mongoose');
const { stringify } = require('querystring');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    isstock: {
        type: Number,
        default: true,
        default: 0
    },
    isActive: {
        type: Boolean

    },
    price: {
        type: Number,
        required: true
    },
    barcode: {
        type: String,
        required: true,
        unique: true
    },
    premossion: {
        type: String,
        enum: ['viewer', 'admin', 'editor'],
        default: 'viewer'
    },
    img: {
        type: String
    },
    description: {
        type: String
    },
    category: { type: String },


})

const itemModel = mongoose.model('item', itemSchema);

module.exports = { itemModel }
