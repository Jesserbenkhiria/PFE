import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
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
    message:{
        type:String,
        required:true,
        minLength:[10,"Votre Message Doit Contenir Au Moins 10 Caractères !"],

    }


})

export const Message= mongoose.model("Message",messageSchema);
