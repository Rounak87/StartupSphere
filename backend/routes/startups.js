import express from 'express';
import { getStartups, createStartups } from '../controllers/StartupController.js';


const router = express.Router();

router.get('/', getStartups);
router.post('/', createStartups);

export default router;