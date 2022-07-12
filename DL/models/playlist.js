require('../db').connect()
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    email:{
        type: SchemaTypes.ObjectId,
        ref: 'user'
    },
    listName:{
        type: String,
        required: true
    },
    songs: [{
        songId: { type: String, required: true, unique: true },
        songName: { type: String, required: true },
        songPic: { type: String, required: true },
    }]
})

const playlistModel = mongoose.model('playlist', playlistSchema);

module.exports = { playlistModel }