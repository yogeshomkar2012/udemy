import express from 'express';
const router = express.Router();
import UserController from '../controllers/userControllers.js';

router.get('/', UserController.home);
router.get('/registartion', UserController.registartion);
router.post('/registartion', UserController.creatingUserDoc);
router.get('/login', UserController.login);
router.post('/login', UserController.verifyLogin);
router.get('/dashboard', UserController.dashboard);

export default router;
