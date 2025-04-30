import express from 'express';
import { getStartups, createStartups,getStartupsByIndustry } from '../controllers/StartupController.js';


const router = express.Router();

router.get('/', getStartups);
router.post('/', createStartups);
router.get('/industry',getStartupsByIndustry);

export default router;