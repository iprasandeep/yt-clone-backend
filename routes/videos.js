import express from 'express';
import { addVideo, getVideo, addView, trend, random, sub,getByTag, search } from '../controllers/video.js';
import {verifyToken} from '../utils/verifyToken.js';

const router  = express.Router();

router.post('/', verifyToken , addVideo )
router.put('/:id', verifyToken , addVideo )
router.delete('/:id',addVideo )
router.get('/find/:id', verifyToken, getVideo )
router.put('/view/:id', verifyToken, addView )
router.get('/trend', trend)
router.get('/random', random)
router.get('/sub', verifyToken, sub)

router.get('/tags', getByTag)
router.get('/search', verifyToken, search)

export default router;