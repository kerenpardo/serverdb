const jwt=require("jsonwebtoken")
const secret="1234"

function createToken(_id){
   return jwt.sign({_id},secret,{expiresIn:"1h"})
}
// console.log(createToken("ab"))

function validateToken(token){
    return jwt.verify(token,secret)

}
//  console.log(validateToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiYyIsImlhdCI6MTY1NTgxNTU4OSwiZXhwIjoxNjU1ODE1NjQ5fQ.ZS2GHr1o134zZ8zwYvyg3nCGWnR9hKPUiaoIVypdlIU"))
module.exports={createToken,validateToken}