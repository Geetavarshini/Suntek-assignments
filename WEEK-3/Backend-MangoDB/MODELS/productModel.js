import {Schema,model} from 'mongoose';
//Create product Schema (pid,productName,price)
const productSchema = new Schema({
    pid:{
        type:Number,
        required: [true,"Product id is required"]
    },
    productname: {
        type: String,
        required: [true, "Product name is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [1, "Price cannot be negative or zero"]
    },
      
},{
    strict: true
})
//Create product model frm schema and export it 
 export const productModel = model("product", productSchema);
