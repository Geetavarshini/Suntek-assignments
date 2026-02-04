import {Schema,model} from 'mongoose';
// create product schema
const productSchema=new Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:[1, "Price must be at least 1"]
    },
     brand:{
        type:String,
        required:true
    }
    
},{
        strict:"throw",
        timestamps:true,
        versionKey:false
})

// create product model
export const productModel=model('product', productSchema);
    