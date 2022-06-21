
const { userModel } = require('../models/user')

async function create(data) {
    return await userModel.create(data);
}
async function read(filter,proj) {
    return await userModel.find(filter,proj);
}
async function update(filter,data) {
    return await userModel.updateOne(filter,data);  
}
async function updateone(filter,data) {
    return await userModel.updateOne(filter,data);  
}
async function readOne(filter, proj) {
    return await userModel.findOne(filter, proj);
}
async function del(filter) {
    return await update(filter,{isActive:false})
    // const res = await userModel.deleteOne(filter);     
}

module.exports = {create,read,update,del,readOne}
