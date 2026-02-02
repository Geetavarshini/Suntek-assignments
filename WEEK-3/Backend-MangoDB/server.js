import exp from 'express';  
import {userApp} from './API/userAPI.js'
import {productApp} from './API/productAPI.js'
import { connect } from 'mongoose';
const app = exp();
//Assign port number
const port = 4000;

// connect to mongoDB
 async function connectDB() {
    try{
    await connect('mongodb://localhost:27017/mypookiedb')
    console.log("connected to mongoDB")
    app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
    console.log("connected to mongoDB")
    }catch(err){
        console.log("error connecting to mongoDB", err)
    }
}
connectDB();
//body parser middleware
app.use(exp.json());


//if path starts with userapi then forward the request to userApp
app.use('/user-api', userApp);
app.use('/product-api',productApp);
