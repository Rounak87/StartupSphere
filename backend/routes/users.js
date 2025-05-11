import express from 'express'
import { getUser, createUser, getInvestorIdByUserId } from '../controllers/UserController.js';

const router = express.Router();

router.get('/', getUser)
router.post('/', createUser)
router.get('/investorid/:userid', getInvestorIdByUserId)

export default router;