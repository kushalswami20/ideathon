import express from "express";
import {register } from "../controllers/registeration.js";
import { singleUpload } from "../middleware/multer.js";
 
const router = express.Router();

router.route("/register").post(singleUpload,register);


export default router;

