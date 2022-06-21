

const { default: mongoose } = require('mongoose');
const { orderModel } = require('../models/order')

async function create(data) {
    return await orderModel.create(data);
   
}
async function read(filter, data) {
    return await orderModel.find(filter, data).populate('userid').populate('items.itemid');
    // console.log(res[0])
    // return res;
}
async function update(filter, data) {
    return await orderModel.updateOne(filter, data);
    
}
// async function del(filter) {
//     const res=await update(filter,{isActive:false})
//     // const res = await userModel.deleteOne(filter);
//        console.log(res)
// }

module.exports = { create, read, update }

