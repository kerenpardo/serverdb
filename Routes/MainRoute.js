const express=require('express')
const router=express.Router();

const usersRouter=require('./userRoute')
const itemsRouter=require('./itemRoute')
const orderRouter=require('./orderRoute')

router.use('/users',usersRouter)
// router.use('/items',itemsRouter)
// router.use('/orders',orderRouter)

module.exports=router