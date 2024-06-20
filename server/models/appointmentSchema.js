import mongoose from "mongoose";
import validator from "validator";
const appointmentSchema = new mongoose.Schema({
    
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
    address:{
        type:String,
        required:true
    },
    phone: {
        type: String,
        required: true,
        minLength: [8, "Votre Numéro De Téléphone Doit Contenir Exactement 8 Chiffre!"],
        maxLength: [8, "Votre Numéro De Téléphone Doit Contenir Exactement 8 Chiffre!"],
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
    studentId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "L'id de l utilisateur est obligatoire !"],
      },
    
    appointment_date:{
        type:String,
        required:true 
    },
    hasVisited: {
        type: Boolean,
        default: false,
      },
    status:{
        type:String,
        enum:["Pending", "Accepted", "Rejected"],
        default:"Pending",
    },
    
});
export const Appointment = mongoose.model("Appointment",appointmentSchema)