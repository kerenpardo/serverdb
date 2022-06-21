require('../db').connect()
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required:true

    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required: true,
        select: false

    },
    cellphone: {
        type: Number
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    address: {
        street: { type: String },
        homeNum: { type: Number },
        city: { type: String }
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    lastlog: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
        select: false

    }
})

const userModel = mongoose.model('user', userSchema);

module.exports = { userModel }
let user1 = {
    firstName: 'moshe',
    lastName: 'levi',
    email: 'moshe2@gmail.com',
    password: '1234',
    address: {
        street: 'leshem',
        homeNum: 20,
        city: 'naale'
    },
    gender: 'male'
}
// const create=async (data)=>{
//     const res=await userModel.create(data);
//     console.log(res)
// }

// const read = async (filter) => {
//     const res = await userModel.find(filter);
//     console.log(res)
// }
// read({
//     // "address.homeNum":{$gte:20}
//     $and:[{firstName:'keren'},{lastName:'pardo'}]

// })
// const readOne = async (filter) => {
//     const res = await userModel.findOne(filter);
//     console.log(res)
// }
// const update = async (filter,data) => {
//     const res = await userModel.updateOne(filter,data);
//     console.log(res)
// }
// update({ email: 'moshe2@gmail.com' }, { email: 'moshe1112@gmail.com', password: '1111' })
// create(user1)

// const delet = async (filter) => {
//     const res = await userModel.deleteOne(filter);
//     console.log(res)
// }
// delet({ firstName: 'moshe' })