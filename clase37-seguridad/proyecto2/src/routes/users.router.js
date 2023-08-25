import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get('/',usersController.getUsers); // no tiene validaciones Authorizations 
router.get('/:uid',usersController.getUser);

export default router;