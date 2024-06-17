import express from 'express'
import { createAnswer, getData } from '../controllers/dataController.js'

const router = express.Router();

router.post('/', createAnswer);
router.get('/', getData);

export default router
