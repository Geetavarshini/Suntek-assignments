import  {Schema, model} from "mongoose" 
//Create user Schema (username,password,age)
const userSchema = new Schema({
    username: {
        type: String, 
        required: [true,"UserName is required"],
        minlength:[3,"Minimum length of username is 3 characters"],
        maxlength:[30,"Maximum length of username is 30 characters"]
    },
    password: {
        type: String, 
        required: [true,"Password is required"],
        minlength:[6,"Minimum length of password is 6 characters"],
    },
    age: {
        type: Number,
        required: [true,"Age is required"], 
        min:[0,"Age cannot be negative"],
        max:[900,"Are you immortal? "]
    }
},{
    strict:"throw"
})
//Crreate user model from schema and export it
export const UserModel =model("user",userSchema);