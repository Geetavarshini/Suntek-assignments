import jwt, { decode } from 'jsonwebtoken'
export function tokenVerification(req,res,next){
    //token verification logic

    //get token from cookies-parser
    let signedToken= req.cookies.token 
    if(!signedToken){
        return res.status(401).json({message:"Unauthorized user, token missing"})
    }
    //verify token(decode)
   let decodedToken= jwt.verify(signedToken,'secret')
   console.log("decode token: ", decodedToken)
   next()
}