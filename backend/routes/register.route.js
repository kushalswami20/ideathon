import express from "express";
import {register } from "../controllers/registeration.js";
import { singleUpload } from "../middleware/multer.js";
import {contact} from "../controllers/contact.js";
const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/contact").post(singleUpload,contact);

export default router;

