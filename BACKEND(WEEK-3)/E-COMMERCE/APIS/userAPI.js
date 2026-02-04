import exp from "express"
import { userModel } from "../Models/userModel.js"
import { productModel } from "../Models/productModel.js"
import { hash,compare } from 'bcryptjs' 
import jwt from 'jsonwebtoken'
import { tokenVerification } from '../MiddleWare/tokenVerification.js'



// create user router
export const userApp=exp.Router();

//Create User
//Creaet USer
userApp.post('/users', async (req, res) => {
    //get user obj from req body
    let newUser= req.body;
    //validate new user
    await new userModel(newUser).validate()

    //hash password before saving to db (omitted for brevity)
    let hassedPassword= await hash(newUser.password,12)
    //replace plain password with hashed password (omitted for brevity)
    newUser.password= hassedPassword;
    //create user in doc
    let newUserDoc= await new userModel(newUser)
    console.log(newUserDoc)
    //save in db
    await newUserDoc.save({validateBeforeSave:false})
    //send response
    res.status(201).json({message:"User created", payload:newUserDoc})  
})

//User Authentication (login)
userApp.post('/auth', async (req, res) => {
    //get user credentials from req body
    let userCred= req.body;
    //check for useranme and password in db
    let userObj= await userModel.findOne({name:userCred.username})
    if(userObj===null){
        return res.status(404).json({message:"Invalid username"})
    }
    //compare  hassed password
    let status= await compare(userCred.password, userObj.password)
    if(status===false){
        return res.status(404).json({message:"Invalid password"})
    }
    //create signed token 
    let signedToken= jwt.sign({name:userCred.username},'secret',{expiresIn:"30m"})
    //save token as httpOnly cookie
    res.cookie('token', signedToken, {httpOnly:true, secure:false, sameSite:'lax'})
    //send response
    res.status(200).json({message:"User logged in successfully"})
})

//Add product to user cart
userApp.put('/user-cart/userid/:uid/productid/:pid', async (req, res) => {
    //get uid and pid from req params
    let {uid,pid}= req.params  //{uid:"", pid:""}
    try{
    //check if user exist
    let user= await userModel.findById(uid)
    if(!user){
        res.status(401).json({message:"User not found"}) 
        return;
    }
    //check product 
    let product= await productModel.findById(pid)
    if(!product){
        res.status(401).json({message:"Product not found"})
        return;
    }

    //check if product already in cart
    let productInCart=user.cart.find((c)=> c.product.toString()===pid)
    console.log("productInCart")
    console.log(productInCart)
    if(productInCart){
        productInCart.quantity += 1;
    }
    else{
        //add product to cart 
        user.cart.push({product:pid, quantity:1})
    }
    let modifiedUser= await user.save()
    //perform the update
    //let modifedUser= await userModel.findByIdAndUpdate(uid,{$push:{cart:{product:pid}}},{new:true}).populate("cart.product","productName price ")
    res.status(200).json({message:"Product added to cart", payload:modifiedUser})
    }catch(err){
        res.status(500).json({message:"Server error", reason:err.message})
    }
})

//read userby id
userApp.get('/users/:uid', async (req, res) => {
    //get id from req params
    let {uid}= req.params
    //find user by id
    let user= await userModel.findById(uid).populate("cart.product","productName price ")
    //send response
    res.status(200).json({message:"User found", payload:user})
})

//quantity update in product model when user adds product to cart
userApp.put('/compare/:pid', async (req, res) => {
    //get pid from req params
    let {pid}= req.params
    //find product by id
    let prod= await productModel.findById(pid)
    //compare
    if(prod._id.equals(pid)){
        console.log("Product IDs match")
    }
    else{
        console.log("Product IDs do not match")
    }
})

//Update user by id
userApp.put('/users/:id', async (req, res) => {
    //get user id from url params
    let objid= req.params.id;
    //get updated user obj from req body
    let modifiedUser= req.body;
    //update user in db
    let updatedUser= await userModel.findByIdAndUpdate(objid, {$set:{...modifiedUser}}, {new:true})
    //hash password if updated
    if(modifiedUser.password){
        let hassedPassword= await hash(modifiedUser.password,12)
        updatedUser.password= hassedPassword;
        await updatedUser.save()
    }
    //send response
    res.status(200).json({message:"User updated", payload:updatedUser})
})

//delete user by id
userApp.delete('/users/:id', async (req, res) => {
    //get user id from url params
    let objid= req.params.id;
    let deletedUser= await userModel.findByIdAndDelete(objid)
    //send response
    res.status(200).json({message:"User deleted"})
})

//test route protected
userApp.get("/test",tokenVerification, (req,res)=>{
    res.json({message:"Test route working"})
})


