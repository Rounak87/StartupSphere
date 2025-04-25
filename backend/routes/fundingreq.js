import express from 'express';
import { getfundingreq,givefundingreq } from '../controllers/fundingreqController.js';

const router = express.Router();

router.get('/:startupid',getfundingreq);
router.post('/:startupid',givefundingreq);

export default router;