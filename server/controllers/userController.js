import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
import ErrorHandler, { errorMiddleware } from "../middlewares/errorMiddleware.js";
import {generateToken} from "../utils/jwtToken.js"
import {User } from "../models/userSchema.js";
import cloudinary from "cloudinary";

export const studentRegister =  catchAsyncErrors(async(req,res,next)=>{
    const {firstName,lastName,email,phone,password,genre,role,levelEnglish}= req.body;
    if (
        !firstName ||
        !levelEnglish||
        !lastName||
        !email||
         !phone||
          !password ||
          !genre || 
          !role)
    {
        return next (new ErrorHandler("Remplir tout les champs SVP",400));
    }
    let user = await User.findOne({ email });
    if (user ){
        return next(new ErrorHandler("Student est deja enregistré!",400));
    }
  
    user = await User.create({
        firstName,
        lastName,
        email,
        phone,
        levelEnglish,
        password,
        genre,
        role:"Student",

    });
    generateToken(user,"Client enregistré",200, res);
 

});


export const login = catchAsyncErrors(async(req,res,next)=>{
    const {email,password,confirmPassword,role   }=req.body;
   if(!email || !password || !confirmPassword || !role)
        {
            return next (new ErrorHandler("Veuillez fournir tous les détails.",400))}

            if (password !== confirmPassword) {
                return next (new ErrorHandler("Le mot de passe ne correspondent pas!",400))
            }

            const user = await User.findOne({ email }).select("+password");
            if(!user){
                return next (new ErrorHandler("Mot De Passe Or Email Invalides.",400)) 
            }

            const isPasswordMatch = await user.comparePassword(password)
            if (!isPasswordMatch ){
                return next (new ErrorHandler("Mot De Passe Or Email Invalides!",400))
            }

            if (role !== user.role){
                return next (new ErrorHandler("Role inconuue!",400))
            }
            generateToken(user,"Admin a été connecté avec succès.!",201, res);

        

});

   
  
export const addNewAdmin = catchAsyncErrors(async(req,res,next)=>{
    const {firstName,lastName,email,phone,password,genre}= req.body;
    if (
        !firstName ||
        !lastName||
        !email||
         !phone||
          !password ||
          !genre)
    {
        return next (new ErrorHandler("Remplir tout les champs SVP",400));
    }
    const isRegistred= await User.findOne({email});
    if (isRegistred){
        return next (new ErrorHandler(`${isRegistred.role} à étè déja enregistré par cet e-mail  !`))
    }
    const admin = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        genre,
        role:"Admin"
    });
    res.status(200).json({
        success:true,
        message:"La nouvelle admin a été enregistrée. ",
        admin

    })
});
export const getAllStudent = catchAsyncErrors(async(req,res,next)=>{
const student= await User.find({role:"Student"});
res.status(200).json({
    success:true,
    student
})

       
})

export const getStudentCount = catchAsyncErrors(async (req, res, next) => {
  const studentCount = await User.countDocuments({ role: "Student" });
  res.status(200).json({
    success: true,
    studentCount,
  });
});
export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
      success: true,
      user,
    });
  });


  export const logoutAdmin = catchAsyncErrors(async(req,res,next)=>{
    res
    .status(200)
    .cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message:"Admin est déconnecté avec succès "
    })
  }) ;

 





  
export const avatarStudent = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return next(new ErrorHandler("Photo de profile est obligatoire!", 400));
    }
    const { studentAvatar } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(studentAvatar.mimetype)) {
      return next(new ErrorHandler("le format du ficher ne correspond pas!", 400));
    }
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !studentAvatar
    ) {
      return next(new ErrorHandler("veuillez remplir tous les formulaire SVP!", 400));
    }
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
      return next(
        new ErrorHandler("Cet email est déjà utilisé par cet utilisateur!", 400)
      );
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
        studentAvatar.tempFilePath
    );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.error(
        "Cloudinary Error:",
        cloudinaryResponse.error || "Unknown Cloudinary error"
      );
      return next(
        new ErrorHandler("Impossible de télècharger une image de coudinary ", 500)
      );
    }
    const student = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      role: "Student",
    
      studentAvatar: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    });
    res.status(200).json({
      success: true,
      message: "Enregistrement avec succès",
      student,
    });
  });




  export const logoutStudent = catchAsyncErrors(async(req,res,next)=>{
    res
    .status(201)
    .cookie("studentToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message:"L'utisateur est déconnecté avec succès. ",
    });
  }) ;
