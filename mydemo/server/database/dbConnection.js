import mongoose from "mongoose";

 export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"ecommerce"
    }).then(()=>{
        console.log("database connected successfully");
    }).catch(err=>{
        console.log(`some error occupied ${err}`);
    })
}