const mongoose = require('mongoose')
// import mongoose from 'mongoose'

const MONGO_URL = 'mongodb+srv://kerenpardo:keren2001@cluster0.otbtx3e.mongodb.net/playlist?retryWrites=true&w=majority'
exports.connect = async () => {
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true },
            (err) => {
                if (err) { throw err }
                console.log('connection succes,state:', mongoose.connection.readyState)
            })
    }
    catch (err) {
        console.log("error mongoose", e)
    }
}
// async function connect(){
// try{
//    await mongoose.connect(MONGO_URL,{useNewUrlParser:true},
//         (err)=>{
//             if(err){throw err}
//             console.log('connection succes,state:',mongoose.connection.readyState)
//         })
// }
// catch (err){
//     console.log("error mongoose",e)
// }
// }

// module.exports=connect;