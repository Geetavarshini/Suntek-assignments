import exp from "express"
import { productModel } from "../Models/productModel.js"
// create product router
export const productApp=exp.Router();

//Create Product
productApp.post('/products', async (req, res) => {
    //get product obj from req body
    let newProduct= req.body;
    //create product in doc
    let newProductDoc= await new productModel(newProduct)
    //save in db
    await newProductDoc.save()
    //send response
    res.status(201).json({message:"Product created", payload:newProductDoc})  
})

//Read all products
productApp.get('/products', async (req, res) => {
    //get all products from db
    let products= await productModel.find()
    //send response
    res.status(200).json({message:"All products", payload:products})  
})


