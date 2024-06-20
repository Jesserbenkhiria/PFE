import express  from "express";
import { createJobType, getAllTypeJob ,updateJobType,deleteJobType} from "../controllers/jobTypeController.js";
import { isAdminAuthenticated,  } from "../middlewares/auth.js";
import { createJob ,getJobs,getJobById, updateJob,getJobsWithPagination} from "../controllers/jobController.js";
const router =express.Router();

              //TypeJob

router.post("/sendJobType",isAdminAuthenticated,createJobType);
router.get("/getAllTypeJob",isAdminAuthenticated,getAllTypeJob);
router.put("/updateTypeJobs/:id",  isAdminAuthenticated, updateJobType);
router.delete("/deleteTypeJobs/:id",  isAdminAuthenticated, deleteJobType);


             //Job 

router.post("/createJob",isAdminAuthenticated,createJob);
router.get("/getJobs",  getJobs);
router.get("/jobs/:id", getJobById);
router.get("/showJobs", getJobsWithPagination);
router.put("/updateJobs/:id",  isAdminAuthenticated, updateJob);





export default router;