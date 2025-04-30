import express from 'express';
import { getfundingreq,givefundingreq,updateFundingStatus } from '../controllers/fundingreqController.js';

const router = express.Router();

router.get('/:startupid',getfundingreq);
router.post('/:startupid',givefundingreq);
router.patch('/:requestid',updateFundingStatus);

export default router;