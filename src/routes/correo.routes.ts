import { Router } from 'express';
import * as correoController from '../controllers/correo.controller';
const router = Router();

router.post('/send', correoController.sendEmail);

export default router;
