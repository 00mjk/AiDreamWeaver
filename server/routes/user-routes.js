import express from 'express'

import { getUser, signin, signup, signinGoogle, forgotPassword, resetPassword, purchaseRole } from '../controllers/clients/user.js'
import { createImage, searchImageByKeyword, favouriteImg, getImageById, followImgAuthor, makePrivate } from '../controllers/clients/image.js';
import { getAllRoles } from '../controllers/clients/role.js';
import clientAuthMiddleware from '../middleware/client-auth.js';

const router = express.Router()

router.get('/users/', clientAuthMiddleware, getUser)
router.post('/users/signin', signin)
router.post('/users/signup', signup)
router.post('/users/signin_google', signinGoogle);
router.post('/users/forgot', forgotPassword);
router.post('/users/reset', resetPassword);
router.post('/users/purchase_role', clientAuthMiddleware, purchaseRole);

router.post('/imgs/search', searchImageByKeyword)
router.post('/imgs/create', clientAuthMiddleware, createImage)
router.post('/imgs/fav', clientAuthMiddleware, favouriteImg)
router.post('/imgs/get_image_by_id', clientAuthMiddleware, getImageById)
router.post('/imgs/follow_img_author', clientAuthMiddleware, followImgAuthor)
router.post('/imgs/make_private', clientAuthMiddleware, makePrivate)

router.post('/roles/get_all_roles', getAllRoles);

export default router