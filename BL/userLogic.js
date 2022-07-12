const userController = require('../DL/controllers/usercontroller')
const{createToken}=require("../middleware/jwt")
const jwtFn = require("../middleware/jwt")
// async function getUserById(){


// }
async function getAllUsers  ()  {
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

<<<<<<< HEAD
async function register (userFeilds) {
=======
exports.register =  async(userFeilds) => {
    if(!userFeilds.email.includes("@")) throw ({code: 410, msg: "email is not valid"})
>>>>>>> 4dee3e2d98f9b0230ea1a53617f9c51cb9d874e4
    const euser=await userController.read({email:userFeilds.email})
    if(euser.length) throw ({code: 400, msg: "there is  user like this"});
    const user = await userController.create(userFeilds);
    console.log(user)
    const token = createToken(user._id)
    return token
}
async function getUserById(email) {
    const user = await userController.read({email: email })
    if (!user.length) throw ({ code: "400", msg: "there is no user like this" })
    return user;
}
function updateUser(id, newField)  {
    return userController.update({ _id: id }, newField)
}
function del(id) {
    return userController.del({ _id: id })
}



<<<<<<< HEAD
module.exports={login,register,getUserById,del,updateUser}
=======
module.exports={login,getAllUsers}
>>>>>>> 4dee3e2d98f9b0230ea1a53617f9c51cb9d874e4
