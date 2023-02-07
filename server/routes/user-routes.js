import express from 'express'
import { getUser, signin, signup, forgotPassword, resetPassword } from '../controllers/clients/user.js'
import { createImage, searchImageByKeyword } from '../controllers/clients/image.js';
import clientAuthMiddleware from '../middleware/client-auth.js';

const router = express.Router()

router.get('/users/', clientAuthMiddleware, getUser)
router.post('/users/signin', signin)
router.post('/users/signup', signup)
router.post('/users/forgot', forgotPassword);
router.post('/users/reset', resetPassword);

router.post('/imgs/create', clientAuthMiddleware, createImage)
router.post('/imgs/search', searchImageByKeyword)

export default router