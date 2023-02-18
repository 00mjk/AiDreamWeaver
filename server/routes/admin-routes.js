import express from 'express'
import { getAdmin, signin, signup, forgotPassword, resetPassword } from '../controllers/admins/admin.js'
import { getUsers, addUser, deleteUser, updateUser } from '../controllers/admins/users.js'
import { getFilters, addFilter, deleteFilter, updateFilter } from '../controllers/admins/filters.js'
import { getAllModels, getModels, addModel, deleteModel, updateModel } from '../controllers/admins/models.js'
import { getSales, deleteSale } from '../controllers/admins/sales.js'
import { getRoles, updateRole } from '../controllers/admins/roles.js'

import adminAuthMiddleware from '../middleware/admin-auth.js';

const router = express.Router()

router.get('/', adminAuthMiddleware, getAdmin)
router.post('/signin', signin)
router.post('/signup', signup)
router.post('/forgot', forgotPassword);
router.post('/reset', resetPassword);

router.post('/users', getUsers);
router.post('/addUser', addUser);
router.post('/deleteUser', deleteUser);
router.post('/updateUser', updateUser);

router.post('/filters', getFilters);
router.post('/addFilter', addFilter);
router.post('/deleteFilter', deleteFilter);
router.post('/updateFilter', updateFilter);

router.post('/sales', getSales);
router.post('/deleteSale', deleteSale);

router.post('/roles', getRoles);
router.post('/updateRole', updateRole);

router.get('/allModels', getAllModels);
router.post('/models', getModels);
router.post('/addModel', addModel);
router.post('/deleteModel', deleteModel);
router.post('/updateModel', updateModel);

export default router