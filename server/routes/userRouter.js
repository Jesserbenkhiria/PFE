import express from "express"
import { studentRegister ,
    getAllStudent,
    getUserDetails,
    login,
    logoutAdmin,
    logoutStudent,
    avatarStudent,
    getStudentCount
} 
from "../controllers/userController.js";
import {addNewAdmin} from "../controllers/userController.js";
import {
    isStudentAuthenticated,
    isAdminAuthenticated
}

from "../middlewares/auth.js"
const router =express.Router();
 
router.post("/student/register",studentRegister)
router.post("/login",login);
router.post("/admin/addNew",isAdminAuthenticated,addNewAdmin)
router.get("/student/getStudent",isAdminAuthenticated,getAllStudent)
router.get("/admin/me",isAdminAuthenticated,getUserDetails)
router.get("/student/me",isStudentAuthenticated,getUserDetails)
router.get("/admin/logout",isAdminAuthenticated,logoutAdmin)
router.get("/student/logout",isStudentAuthenticated,logoutStudent)
router.post("/student/addInformation",isAdminAuthenticated,avatarStudent)
router.get("/count", getStudentCount);






 export default router;
