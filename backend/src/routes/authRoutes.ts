import express from 'express';
import { login, verifyOtp } from '../controller/authController';

const router = express.Router();

router.post('/login', login);
router.post('/verify', verifyOtp);

export default router;