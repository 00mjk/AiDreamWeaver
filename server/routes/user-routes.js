import express from 'express'
import {
    getUser,
    signin,
    signup,
    forgotPassword,
    resetPassword
} from '../controllers/clients/user.js'
import {
    createImage,
    searchImageByKeyword,
    favouriteImg,
    getImageById,
    followImgAuthor
} from '../controllers/clients/image.js';
import clientAuthMiddleware from '../middleware/client-auth.js';

const router = express.Router()

router.get('/users/', clientAuthMiddleware, getUser)
router.post('/users/signin', signin)
router.post('/users/signup', signup)
router.post('/users/forgot', forgotPassword);
router.post('/users/reset', resetPassword);

router.post('/imgs/search', searchImageByKeyword)
router.post('/imgs/create', clientAuthMiddleware, createImage)
router.post('/imgs/fav', clientAuthMiddleware, favouriteImg)
router.post('/imgs/get_image_by_id', clientAuthMiddleware, getImageById)
router.post('/imgs/follow_img_author', clientAuthMiddleware, followImgAuthor)

export default router