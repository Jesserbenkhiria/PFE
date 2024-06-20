import express  from "express";
import{postAppointment ,
    getAllAppointment,
    updateAppointment,
    deleteAppointment,getDisabledDates
} from "../controllers/appointmentController.js"
import { isStudentAuthenticated , isAdminAuthenticated} from "../middlewares/auth.js";
const router =express.Router();
router.post("/postAppointmment",isStudentAuthenticated, postAppointment);
router.get("/getAllAppointment",isAdminAuthenticated, getAllAppointment);
router.put("/update/:id",isAdminAuthenticated, updateAppointment);
router.delete("/delete/:id",isAdminAuthenticated, deleteAppointment);
router.get("/appointment/getDisabledDates", getDisabledDates);





export default router;
