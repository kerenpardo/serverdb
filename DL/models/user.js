require('../db').connect()
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    userName:{
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const userModel = mongoose.model('user', userSchema);

module.exports = { userModel }