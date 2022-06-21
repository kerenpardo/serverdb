const { read } = require("fs")
const { itemModel } = require("../DL/models/item")
require('../DL/db').connect()
const { userModel } = require("../DL/models/user")
const usercontroller= require('../DL/controllers/usercontroller')
const itemcontroller= require('../DL/controllers/itemcontroller')
const ordercontroller= require('../DL/controllers/ordercontroller')
const { off } = require("process")


async function createOrder(order){
   const user= await usercontroller.read({email:order.user})[0];
   if(!user){console.log('error');return false;}
   let total=0;
   for(i of order.cart){
      const item= await itemcontroller.read({barcode:i.item})
      if(!item||item.isstock<i.qty){
          console.log('error');return false;
      }
      total+=item.price*i.qty;
   }
}

const order = {
    user: 'kerenpardo12@gmail.com',
    cart: [{ item: 2, qty: 4 }]
}

// read({
//     _id: '62a83f15ebe24277f9531d1b'
// })
newOrder(order)