//Create HTTP serve using express
import exp from "express"
import {userApp} from './APIS/userAPI.js'
import {productApp} from './APIS/productAPI.js'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser'

const app = exp();
const port=5000

// connect to mongoDB
 async function connectDB() {
    try{
    await connect('mongodb://localhost:27017/e-commerceDB');
    console.log("connected to mongoDB")
    app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
    }catch(err){
        console.log("error connecting to mongoDB", err)
    }
}
connectDB();
//body parser middleware
app.use(exp.json());
//cookie parser middleware
app.use(cookieParser())

app.use("/product-api", productApp)
app.use("/user-api", userApp)

//function errorHandler
function errorHandler(err, req, res, next) {
    res.json({ message: "Error Occured",reason:err.message })
}
app.use(errorHandler);


