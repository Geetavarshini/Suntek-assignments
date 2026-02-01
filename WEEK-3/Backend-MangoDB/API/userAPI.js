import exp from 'express'
import {UserModel} from '../MODELS/userModel.js'
export const userApp = exp.Router();

//USER API

//Creaet USer
userApp.post('/users', async (req, res) => {
    //get user obj from req body
    let newUser= req.body;
    //create user in doc
    let newUserDoc= await new UserModel(newUser)
    console.log(newUserDoc)
    //save in db
    await newUserDoc.save()
    //send response
    res.status(201).send({message:"User created", payload:newUserDoc})  
})

//Read User
userApp.get('/users', async (req, res) => {
    //read users from DB
    let usersList= await UserModel.find()
    //send response
    res.status(200).send({message:"Users List", payload:usersList})
})

//Read user by id
userApp.get('/users/:id', async (req, res) => {
    //get user id from req params
    let objid= req.params.id;
    //find user in db by id
    let userObj=await UserModel.findById(objid)
    //send response
    res.status(200).send({message:"User found", payload:userObj})
})

//Update user by id
userApp.put('/users/:id', async (req, res) => {
    //get user id from url params
    let objid= req.params.id;
    //get updated user obj from req body
    let modifiedUser= req.body;
    //update user in db
    let updatedUser= await UserModel.findByIdAndUpdate(objid, {$set:{...modifiedUser}}, {new:true})
    //send response
    res.status(200).send({message:"User updated", payload:updatedUser})
})

//delete user by id
userApp.delete('/users/:id', async (req, res) => {
    //get user id from url params
    let objid= req.params.id;
    let deletedUser= await UserModel.findByIdAndDelete(objid)
    //send response
    res.status(200).send({message:"User deleted"})
})