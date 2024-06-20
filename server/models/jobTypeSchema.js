import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;


const jobTypeSchema = new mongoose.Schema({

    jobTypeName: {
        type: String,
        trim: true,
        required: [true, 'job category is required'],
        maxlength: 70,
    },



}, { timestamps: true })

export const JobType= mongoose.model("JobType",jobTypeSchema);