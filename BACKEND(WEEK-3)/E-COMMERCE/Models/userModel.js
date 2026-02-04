import {Schema, model} from 'mongoose';

//Create cart schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref: "product" ,// name of product model
        
    },
    quantity:{
        type:Number,
        default:1
    }
})
// create user schema
const userSchema = new Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        minlength:[3, "Name must be at least 3 characters"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        
    },
    cart:{
        type:[cartSchema],
        required:true
    }
},{
        strict:"throw",
    })
// create user model
export const userModel = model('user', userSchema);