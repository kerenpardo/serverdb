const { validateToken } = require('../BL/jwt')
const { readOne } = require("../DL/controllers/usercontroller")

 async function auth(req, res, next) {
    const token = req.headers.authorization
    try {
        const decode = validateToken(token)
        const euser = await readOne({ _id: decode.id })
        if (!euser) throw ({ code: 503, message: "not auth" })
        next()
    }
    catch (error) {
        res.status(503).send({ message: "not auth" })
    }

}
module.exports = auth;