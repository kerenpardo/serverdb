const userController = require('../DL/controllers/usercontroller')
const{createToken}=require("./jwt")

// async function getUserById(){


// }
exports.getAllUsers = async () => {
    const users = await userController.read({})
    if (users.length === 0) throw ({ code: 400, msg: "there is no users" })
    console.log(users)
    return users;
}
exports.createuser =  async(userFeilds) => {
    const euser=await userController.read({email:userFeilds.email})
    if(euser.length) throw ({code: 400, msg: "there is  user like this"})
    return userController.create(userFeilds)
}

async function login(loginData) {
    const password = loginData.password;
    const email = loginData.email;
    const user = await userController.readOne({ email: email }, "+password");
    console.log("🚀 ~ file: userLogic.js ~ line 8 ~ login ~ user", user)
    if (!user) throw ({ code: 401, message: " unauthorized" })
    if (user.password !== password) throw ({ code: 401, message: " unauthorized" })//bcrypt.compare
    const token = createToken(user._id)
    return token
}

exports.register =  async(userFeilds) => {
    const euser=await userController.read({email:userFeilds.email})
    if(euser.length) throw ({code: 400, msg: "there is  user like this"})
    return await userController.create(userFeilds)
}
exports.getUserById = async (email) => {
    const user = await userController.read({email: email })
    if (!user.length) throw ({ code: "400", msg: "there is no user like this" })
    return user;
}
exports.updateUser = (id, newField) => {
    return userController.update({ _id: id }, newField)
}
exports.del = (id) => {
    return userController.del({ _id: id })
}


let user1 = {
    firstName: 'jonatan',
    lastName: 'levi',
    email: 'jon2@gmail.com',
    password: '1234',
    address: {
        street: 'leshem',
        homeNum: 20,
        city: 'naale'
    },
    gender: 'male'
}


module.exports={login}