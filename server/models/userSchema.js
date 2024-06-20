import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"votre Prenom Doit Contenir Au Moins 3 Caracters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Cotre Nom Doit Contenir Au Moins 3 Caractères!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Entrez un Email Valide SVP !"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [8, "Votre Numéro De Téléphone Doit Contenir Exactement 8 Chiffre!"],
        maxLength: [8, "Votre Numéro De Téléphone Doit Contenir Exactement 8 Chiffre!"],
      },
   
    password:{
        type:String,
        required:true,
        minLength: [8, "Votre Mot De Passe Doit Contenir Au Moins 8 Caracters !"],
        select:false
      
     

    },

    genre:{
        type:String,
        required:true,
        enum:["Homme","Femme"]

    },
    levelEnglish:{
        type:String,
        enum:["A1","A2","B1","B2","C1","C2"],
       
    },
    role:{
        type:String,
        required:true, 
        enum:["Admin","Student"]

    },

    studentAvatar:{
       public_id:String,
        url:String,

   },


});
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password= await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(entredPassword){
return await bcrypt.compare(entredPassword,this.password)
};



userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  };
  

export const User= mongoose.model("User",userSchema);
