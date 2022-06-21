require('../db').connect()
const { itemModel } = require('../models/item')

async function create(data) {
     return await itemModel.create(data);
}
async function read(filter) {
    return await itemModel.find(filter);
    
}
async function readOne(filter, proj) {
    return await itemModel.findOne(filter, proj);
}
async function update(filter, data) {
   return await itemModel.updateOne(filter, data);
    
}
async function del(filter) {
    return await update(filter, { isActive: false })
    
}

module.exports = { create, read, update, del,readOne }

// update({name:' milk'},{price:11});