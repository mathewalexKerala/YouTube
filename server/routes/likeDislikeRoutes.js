import express from 'express'
import { getTotalLikes } from '../controller/getTotalLikes.js';
import { varifyToken } from '../varifyToken.js';

const router = express.Router()


router.get('/:videoUrl', getTotalLikes)

export default router;