import ErrorHandler from "../error/error.js";

import {Reservationss} from "../models/reservationSchema.js"


export const sendReservation=async (req,res,next)=>{
    const {firstName,lastName,email,date,time,phone}= req.body

    if(!firstName||!lastName||!email||!date||!time||!phone){
        return next(new ErrorHandler("please fill the form",400))

       
    }

    try{

        await  Reservationss.create ({firstName,lastName,email,date,time,phone})
        res.status(200).json({
            success:true,
            message:"reserved successfully"
        })

        
    }
    catch(error){
        if(error.name==validationError){
            const validationErrors=Object.values(error.errors).map((err)=>err.message)
            return  next (new ErrorHandler(
                validationErrors.join(","),400
            ))
        }
        return next(error)
    }
}














































































// import ErrorHandler from "../error/error.js";
// import {Reservationss} from "../models/reservationSchema.js";


// export const sendReservation= async(req,res,next)=>{
//     const{firstName, lastName,email,date,time,phone}=req.body

//     if(!firstName || !lastName || !email || !date || !time ||!phone){
//         return next(new ErrorHandler("please fill full reservation form", 400))
//     }

//     try{
//         await Reservationss.create({firstName, lastName,email,date,time,phone})
//         res.status(200).json({
//             success:true,
//             message:"reservation send successfully"
//         })
//     }catch(error){
// if(error.name==="validationError"){
//     const validationErrors=Object.values(error.errors).map((err)=>err.message)

//     return next (new ErrorHandler(
//         validationErrors.join(' ,'),400
//     ))
// }
// return next(error)
//     }
// }