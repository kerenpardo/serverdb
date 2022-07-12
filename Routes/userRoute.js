
const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");
const { authJWT } = require("../middleware/auth");


// const router=express.Router();
// module.exports = (req, res) => {
//     res.send("test")
// }

router.post('/login', async (req,res) => {
    try{
      const token= await userLogic.login(req.body);
      console.log(token);
      res.send(token);
    }
    catch(err){
      console.log(err);
      res.send(err);
  
    }
  })

// router.all('/test', auth, (req, res) => {
//     res.send("test")
// })

router.post('/register', async (req, res) => {
    try {
        const token = await userLogic.register(req.body)
        console.log(token )
        res.send(token)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: "something went wrong" })
    }

})

router.get('/', authJWT,async (req, res) => {
    try {
        const users = await userLogic.getAllUsers();
        res.send(users);
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: "something went wrong" })
    }
})
router.post('/', async (req, res) => {
    // const { firstName, lastName, email } = req.body;
    // const restFeilds = {
    //     firstName: "Yonatan",
    //     lastName: "Ramon",
    //     email: "kkk@walla.com",
    //     password: "987865",
    //     address: {
    //         street: 12,
    //         homeNum: 34,
    //         city: "jerusalem",
    //     },
    //     gender: 'male'
    // }
    try {
        // const userFeilds = { firstName, lastName, email }
        const user = await userLogic.createuser(req.body);
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(400).send(error.msg)
    }

})
router.get('/:id', async (req, res) => {
    try {
        const user = await userLogic.getUserById(req.params.id)
        res.send(user);
    }
    catch (error) {

    }

})

router.get('/email', async (req, res) => {
    try {
        const user = await userLogic.getUserById(req.query.email)
        res.send(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.msg)
    }
})

router.put('/edit_user/:id', async (req, res) => {
    const saveUser = await userLogic.updateUser(req.params.id, req.body)
    res.send(saveUser);

})
router.delete('/edit_user/:id', async (req, res) => {
    const saveUser = await userLogic.del(req.params.id)
    res.send(saveUser);

})
module.exports = router;