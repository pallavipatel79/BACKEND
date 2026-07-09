import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route('/register').post(registerUser)
//http://localhost:5000/users/register

export default router;