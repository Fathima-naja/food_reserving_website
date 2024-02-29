import mongoose from "mongoose";
import validator from "validator";


 const reservationSchema = new  mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[4,"first name  must contain 4 charcters"],
        maxLength:[30,"first name  must not excees 30 charcters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[4,"first name  must contain 4 charcters"],
        maxLength:[30,"first name  must not excees 30 charcters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"first name  must contain 4 charcters"],
        maxLength:[10,"first name  must not excees 30 charcters"]
    },

    time:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    }
})

export  const  Reservationss= mongoose.model("Reservationss",reservationSchema)