import { Router } from "express";
import * as correoController from "../controllers/correo.controller";
const router = Router();
import * as validator from "../middlewares/validator.handler";

router.post("/send", correoController.sendEmail);
router.get("/solicitudes", correoController.getSolicitudes);

export default router;
