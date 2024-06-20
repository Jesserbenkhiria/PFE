   import {Message} from "../models/messageSchema.js"
    import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
    import ErrorHandler from "../middlewares/errorMiddleware.js"

    export const sendMessage= catchAsyncErrors(async(req,res,next)=>{
        const {firstName,lastName,email,phone,message}=req.body;
        if(!firstName ||!lastName ||!email || !phone ||!message){
            return next  (new ErrorHandler("Remplir tout les champs s'il vous plait!",400)) 
        }

            await Message.create({firstName,lastName,email,phone,message});
    res.status(200).json({
        success:true,
        message:"Votre Message A été Envoyé Avec Succès "
    });
            

        });

        export const getAllMessage = catchAsyncErrors(async(req,res,next)=>{
            const allMessage= await Message.find();
          res.status(200).json({
            message:true,
            allMessage
          })

            }
        )

       


