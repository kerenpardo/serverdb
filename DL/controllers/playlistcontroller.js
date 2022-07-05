
const { playlistModel } = require('../models/playlist')

async function create(data) {
    return await playlistModel.create(data);
}
async function read(filter,proj) {
    return await playlistModel.find(filter,proj);
}
async function update(filter,data) {
    return await playlistModel.updateOne(filter,data);  
}
async function readOne(filter, proj) {
    return await playlistModel.findOne(filter, proj);
}
async function del(filter) {
    return await update(filter,{isActive:false})
    // const res = await playlistModel.deleteOne(filter);     
}

module.exports = {create,read,update,del,readOne}
