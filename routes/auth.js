import express from 'express';
import { Router } from 'express';
import { signup } from '../controllers/auth.js';

const router = express.Router();

// CREATE A USER
router.post('/signup', signup)
// SIGN IN
router.post('/signin', )
// LOGIN
router.post('/google', )
// GOOGLE AUTH
router.post('/singup', )
//
export default router;