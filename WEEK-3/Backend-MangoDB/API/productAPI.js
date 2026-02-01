import exp from 'express'
import {productModel} from '../MODELS/productModel.js'
export const productApp = exp.Router();

//PRODUCT API
//Create Product
productApp.post('/products', async (req, res) => {
    //get product obj from req body
    let newProduct= req.body;
    //create product in doc
    let newProductDoc= await new productModel(newProduct)
    //save in db
    await newProductDoc.save()
    //send response
    res.status(201).send({message:"Product created", payload:newProductDoc})  
})

//Read Product 
productApp.get('products',async (req, res) => {
    //read users from DB 
    let productList= await productModel.find()
    //send response
    res.status(201).send({message:"Products List ",payload:productList})

})

//Read product by id
productApp.get('/products/:id', async (req, res) => {
    //get product id from req params
    let objid= req.params.id;
    //find product in db by id
    let productObj=await productModel.findById(objid)
    //send response
    res.status(200).send({message:"Product found", payload:productObj})
})

//Update product by id
productApp.put('/products/:id', async (req, res) => {
    //get product   id from url params
    let objid= req.params.id;
    //get updated product obj from req body
    let modifiedProduct= req.body;
    //update product in db
    let updatedProduct= await productModel.findByIdAndUpdate(objid, {$set:{...modifiedProduct}}, {new:true})
    //send response
    res.status(200).send({message:"Product updated", payload:updatedProduct})
})

//delete product by id
productApp.delete('/products/:id', async (req, res) => {
    //get product id from url params
    let objid= req.params.id;
    let deletedProduct= await productModel.findByIdAndDelete(objid)
    //send response
    res.status(200).send({message:"Product deleted"})
})
