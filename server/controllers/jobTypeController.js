import { JobType } from "../models/jobTypeSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

//post type job 

export const createJobType = catchAsyncErrors(async (req, res, next) => {
    const { jobTypeName } = req.body;

    if (!jobTypeName) {
        return next(new ErrorHandler("Remplir tous les champs SVP", 400));
    }
    const existingJobType = await JobType.findOne({ jobTypeName });
    if (existingJobType) {
        return next(new ErrorHandler(`Le type d'emploi '${jobTypeName}' existe déjà.`, 400));
    }
    const jobType = await JobType.create({
        jobTypeName,
        role: "Admin"
    });
    res.status(200).json({
        success: true,
        message: "Le nouveau type a été enregistré.",
        jobType
    });
});

// GET ALL TYPE JOB

export const getAllTypeJob = catchAsyncErrors(async(req,res,next)=>{
    const allTypeJob= await JobType.find();
  res.status(200).json({
    message:true,
    allTypeJob
  })

    }
)

//Update type job 

export const updateJobType = catchAsyncErrors(async (req, res, next) => {
    const typeId = req.params.id; // Assurez-vous que c'est bien `type_id`
    
    console.log("ID de type d'emploi reçu:", typeId);

    if (!typeId) {
        return next(new ErrorHandler("ID de type d'emploi non fourni", 400));
    }

    try {
        const jobT = await JobType.findByIdAndUpdate(typeId, req.body, { new: true, runValidators: true });

        if (!jobT) {
            console.log("Type d'emploi non trouvé avec cet ID");
            return next(new ErrorHandler("Type d'emploi non trouvé", 404));
        }

        res.status(200).json({
            success: true,
            jobT
        });
    } catch (error) {
        console.error("Erreur lors de la mise à jour du type d'emploi:", error);
        next(error);
    }
});


//Delete type job 

export const deleteJobType = catchAsyncErrors(async (req, res, next) => {
    const typeId = req.params.id;
    if (!typeId) {
        return next(new ErrorHandler("ID de type d'emploi non fourni", 400));
    }
    try {
        const jobT = await JobType.findByIdAndDelete(typeId);

        if (!jobT) {
            console.log("Type d'emploi non trouvé avec cet ID");
            return next(new ErrorHandler("Type d'emploi non trouvé", 404));
        }

        res.status(200).json({
            success: true,
            message: "Type d'emploi supprimé avec succès",
            jobT
        });
    } catch (error) {
        console.error("Erreur lors de la suppression du type d'emploi:", error);
        next(error);
    }
});
